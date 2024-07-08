import React, { useState } from 'react';

const Home = () => {
    const itemName = "FIREIMG";
    const itemPrice = 500;
    const [quantity, setQuantity] = useState(1);
    const [finalAmount, setFinalAmount] = useState(itemPrice);

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setFinalAmount(finalAmount - itemPrice);
        }
    };

    const increment = () => {
        setQuantity(quantity + 1);
        setFinalAmount(finalAmount + itemPrice);
    };

    const checkout = async () => {
        try {
            const res = await fetch("http://localhost:8000/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items: [
                        {
                            id: 1,
                            quantity: quantity,
                            price: itemPrice,
                            name: itemName
                        }
                    ]
                })
            });
            const data = await res.json();
            window.location.href = data.url;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-black p-8 rounded shadow-md w-80">
                <h1 className="text-2xl font-bold mb-4">{itemName}</h1>
                <p className="text-lg mb-4">Price: ₹{itemPrice}</p>
                <div className="flex items-center mb-4">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-l"
                        onClick={decrement}
                    >
                        -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-r"
                        onClick={increment}
                    >
                        +
                    </button>
                </div>
                <p className="text-lg mb-4">Total: ₹{finalAmount}</p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                    onClick={checkout}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Home;
