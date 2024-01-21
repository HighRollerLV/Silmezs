import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = prevScrollPos > currentScrollPos;

            document.getElementById("navbar").style.top = visible ? "0" : "-50px";
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <header id="navbar" className="bg-customDark p-4 text-center fixed w-full transition-transform duration-300 z-50" style={{ top: '0' }}>
            <h1 className="text-4xl font-bold mb-4 animate-textAnimate font-old-standard-tt text-customGray">Silmežs</h1>
            <nav className="flex justify-center">
                {/* Navigation items */}
                <a href="/" className="text-customGray mx-4 ease-in-out transition duration-300 hover:underline hover:underline-offset-8">Home</a>
                <a href="/about" className="text-customGray mx-4 ease-in-out transition duration-300 hover:underline underline-offset-8">About</a>
                <a href="/services" className="text-customGray mx-4 ease-in-out transition duration-300 hover:underline underline-offset-8">Services</a>
                <a href="/contact" className="text-customGray mx-4 ease-in-out transition duration-300 hover:underline underline-offset-8">Contact</a>
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