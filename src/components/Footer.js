import React, { useState } from 'react';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import ContactForm from "./ContactForm";

const Footer = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <>
        {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
            <div className="w-full border-b-2 border-customGray"></div>
            <footer className="bg-customDark p-4 text-center md:text-left">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <ul className="flex justify-center md:justify-start space-x-4 mb-4 md:mb-0">
                            <li><a href="/" className="text-customGray hover:text-white transition">Home</a></li>
                            <li><a href="/interior" className="text-customGray hover:text-white transition">Interior</a></li>
                            <li><a href="/about" className="text-customGray hover:text-white transition">About Us</a></li>
                            <li>
                                <a
                                    href="#!"
                                    onClick={() => setShowContactForm(true)}
                                    className="text-customGray hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                <div className="flex justify-center mb-4 md:mb-0">
                    <a href="/facebook" className="text-customGray hover:text-white transition mx-2">
                        <FaFacebookF/>
                    </a>
                    <a href="/twitter" className="text-customGray hover:text-white transition mx-2">
                        <FaTwitter/>
                    </a>
                    <a href="/instagram" className="text-customGray hover:text-white transition mx-2">
                        <FaInstagram/>
                    </a>
                    <a href="/linkedin" className="text-customGray hover:text-white transition mx-2">
                        <FaLinkedinIn/>
                    </a>
                </div>
                <div>
                    <p className="text-customGray text-sm">&copy; 2024 Silmežs. All rights reserved.</p>
                </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;


