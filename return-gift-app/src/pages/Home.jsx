import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-20">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">Welcome to ReturnGifts!</h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
                Discover the best gifts for every occasion. Explore our products and make your celebrations memorable!
            </p>
            <a
                href="/products"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                Shop Now
            </a>
        </div>
    );
};

export default Home;
