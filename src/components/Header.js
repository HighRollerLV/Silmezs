// Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="bg-customDark p-4 text-center relative">
            <h1 className="text-4xl font-bold mb-4 animate-textAnimate font-old-standard-tt">Silmežs</h1>
            <nav className="flex justify-center">
                <button className="text-customGray mx-4 hover:text-customGold transition duration-300 hover:underline hover:underline-offset-8">Home</button>
                <button className="text-customGray mx-4 hover:text-customGold transition duration-300 hover:underline underline-offset-8">About</button>
                <button className="text-customGray mx-4 hover:text-customGold transition duration-300 hover:underline underline-offset-8">Services</button>
                <button className="text-customGray mx-4 hover:text-customGold transition duration-300 hover:underline underline-offset-8">Contact</button>
            </nav>

            {/* Cell number and email section */}
            <div className="absolute top-0 right-0 mt-4 mr-4 text-customGray">
                <p className="mb-2">Cell: +371 12 456 789</p>
                <p>Email: silmezs@example.com</p>
            </div>
        </header>
    );
};

export default Header;



