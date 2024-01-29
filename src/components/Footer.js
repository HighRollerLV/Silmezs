import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-customDark text-white p-4">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div>
                    <p className="text-sm">Amarant Interior Design</p>
                    <p className="text-xs">123 Design Street, Creativity City</p>
                    <p className="text-xs">Phone: (123) 456-7890</p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <a href="/facebook" className="hover:text-customGray text-white transition duration-300">
                        <FaFacebookF size="20"/>
                    </a>
                    <a href="/twitter" className="hover:text-customGray text-white transition duration-300">
                        <FaTwitter size="20"/>
                    </a>
                    <a href="/instagram" className="hover:text-customGray text-white transition duration-300">
                        <FaInstagram size="20"/>
                    </a>
                    <a href="/linkedin" className="hover:text-customGray text-white transition duration-300">
                        <FaLinkedinIn size="20"/>
                    </a>
                </div>
                <div>
                    <p className="text-sm">Email: contact@amarantdesign.com</p>
                    <p className="text-center text-xs">© {currentYear} Amarant Interior Design. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



