import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Header = () => {
    return (
        <header className="bg-customDark p-4 text-center relative">
            <h1 className="text-4xl font-bold mb-4 animate-textAnimate font-old-standard-tt">Silmežs</h1>
            <nav className="flex justify-center">
                {/* Navigation items*/}
                <a href="/" className="text-customGray mx-4 hover:text-customGold transition duration-300 hover:underline hover:underline-offset-8">Home</a>
                <a href="/about" className="text-customGray mx-4 hover:text-customGold transition duration-300 hover:underline underline-offset-8">About</a>
                <a href="/services" className="text-customGray mx-4 hover:text-customGold transition duration-300 hover:underline underline-offset-8">Services</a>
                <a href="/contact" className="text-customGray mx-4 hover:text-customGold transition duration-300 hover:underline underline-offset-8">Contact</a>
            </nav>

            {/* Contact section with icons */}
            <div className="absolute top-0 right-0 mt-4 mr-4 text-customGray">
                <p className="flex items-center mb-2"><FaPhone className="mr-2"/>+371 12 456 789</p>
                <p className="flex items-center"><FaEnvelope className="mr-2"/>silmezs@example.com</p>
            </div>
        </header>
    );
};

export default Header;