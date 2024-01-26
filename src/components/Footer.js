import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-customDark text-white p-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <div>
                    <p className="text-sm">Silmežs Interior Design</p>
                    <p className="text-xs">123 Design Street, Creativity City</p>
                    <p className="text-xs">Phone: (123) 456-7890</p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <FaFacebookF size="1em" />
                    <FaTwitter size="1em" />
                    <FaInstagram size="1em" />
                    <FaLinkedinIn size="1em" />
                </div>
                <div>
                    <p className="text-sm">Email: contact@silmezdesign.com</p>
                    <p className="text-center text-xs">© {currentYear} Silmežs Interior Design. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


