import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-blue-600">ReturnGifts</Link>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
                        <Link to="/products" className="text-gray-700 hover:text-blue-600 transition">Products</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
                    </div>
                    {/* Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Nav */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                    <Link to="/" className="block px-3 py-2 rounded text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/products" className="block px-3 py-2 rounded text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link to="/about" className="block px-3 py-2 rounded text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="block px-3 py-2 rounded text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
