import React from "react";

const products = [
    {
        id: 1,
        name: "Gift Box",
        image: "https://via.placeholder.com/150",
        price: "$25"
    },
    {
        id: 2,
        name: "Teddy Bear",
        image: "https://via.placeholder.com/150",
        price: "$15"
    },
    {
        id: 3,
        name: "Flower Bouquet",
        image: "https://via.placeholder.com/150",
        price: "$30"
    },
    {
        id: 4,
        name: "Chocolate Pack",
        image: "https://via.placeholder.com/150",
        price: "$10"
    }
];

const Product = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20 px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Products</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-blue-600 font-bold text-lg">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
