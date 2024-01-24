import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ContactForm = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-60">
            <div className="bg-customDark rounded-lg w-full max-w-4xl mx-auto overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/2 p-4 lg:p-8 bg-customDark"> {/* Assuming this is the red box */}
                        <button onClick={onClose} className="text-customGray absolute top-0 right-0 mt-4 mr-4">
                            <AiOutlineClose size={24} />
                        </button>
                        <h2 className="text-xl md:text-2xl text-customGray font-semibold mb-4">Contact Information</h2>
                        <p className="text-customGray"><span className="font-bold">Email: </span>Silmežs@example.com</p>
                        <p className="text-customGray"><span className="font-bold">Phone: </span>+371 29 123 457</p>
                        <div className="flex mt-4">
                            <a href="/facebook" className="text-customGray hover:text-white transition mx-2">
                                <FaFacebookF />
                            </a>
                            <a href="/twitter" className="text-customGray hover:text-white transition mx-2">
                                <FaTwitter />
                            </a>
                            <a href="/instagram" className="text-customGray hover:text-white transition mx-2">
                                <FaInstagram />
                            </a>
                            <a href="/linkedin" className="text-customGray hover:text-white transition mx-2">
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <img src="/images/GrayLogo.jpg" alt="Logo" className="w-16 h-16 md:w-24 md:h-24" />
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-customGray p-4 lg:p-8">
                        <form className="space-y-4">
                            <motion.input
                                type="text"
                                placeholder="Last Name"
                                className="w-full bg-transparent placeholder-customDark border-b border-customDark text-customDark py-2 focus:outline-none"
                                whileHover={{scale: 1.01}}
                                whileTap={{scale: 0.99}}
                            />
                            <motion.input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent placeholder-customDark border-b border-customDark text-customDark py-2 focus:outline-none"
                                whileHover={{scale: 1.01}}
                                whileTap={{scale: 0.99}}
                            />
                            <motion.input
                                type="text"
                                placeholder="Subject"
                                className="w-full bg-transparent placeholder-customDark border-b border-customDark text-customDark py-2 focus:outline-none"
                                whileHover={{scale: 1.01}}
                                whileTap={{scale: 0.99}}
                            />
                            <motion.textarea
                                placeholder="Your Message"
                                className="w-full bg-transparent placeholder-customDark border-b border-customDark text-customDark py-2 focus:outline-none"
                                rows="4"
                                whileHover={{scale: 1.01}}
                                whileTap={{scale: 0.99}}
                            ></motion.textarea>
                            <motion.button
                                type="submit"
                                className="w-full bg-customDark text-white py-2 rounded-md hover:bg-opacity-90 transition ease-in-out duration-300"
                                whileHover={{scale: 1.01}}
                                whileTap={{scale: 0.99}}
                            >
                                Send
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

