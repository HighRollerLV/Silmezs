import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    return (
        <div className="bg-customGray p-8 md:p-32 text-customDark">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
                <div className="w-full lg:w-1/2 mb-6 md:mb-0 text-customGray bg-customDark px-4 md:px-6 py-4 md:py-6 rounded-md relative">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-3 md:mb-4 font-dancing-script">Contact Information</h2>
                    <p className="mb-2 text-xl md:text-2xl"><span className="font-bold">Street: </span>Valdemara, bld. 159</p>
                    <p className="mb-2 text-xl md:text-2xl"><span className="font-bold">City: </span>Riga, LV-1010</p>
                    <p className="mb-2 text-xl md:text-2xl"><span className="font-bold">Country: </span>Latvia</p>
                    <p className="mb-2 text-xl md:text-2xl"><span className="font-bold">Email: </span>Silmežs@example.com</p>
                    <p className="mb-2 text-xl md:text-2xl"><span className="font-bold">Phone: </span>+371 29 123 457</p>
                    <img src="/images/GrayLogo.jpg" alt="Logo" className="absolute bottom-0 right-0 mb-2 mr-0 md:mr-2 w-16 h-16 md:w-24 md:h-24"/>
                </div>


                <div className="w-full lg:w-1/2">
                    <form className="space-y-3 md:space-y-4">
                        <motion.input
                            type="text"
                            placeholder="Name"
                            className="w-full px-3 md:px-4 py-1 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customDark focus:border-transparent"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        />
                        <motion.input
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 md:px-4 py-1 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customDark focus:border-transparent"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        />
                        <motion.input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-3 md:px-4 py-1 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customDark focus:border-transparent"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        />
                        <motion.textarea
                            placeholder="Your Message"
                            className="w-full px-3 md:px-4 py-1 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customDark focus:border-transparent"
                            rows="4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        ></motion.textarea>
                        <motion.button
                            type="submit"
                            className="w-full px-3 md:px-4 py-1 md:py-2 bg-customDark text-white rounded-md hover:bg-opacity-90 ease-in-out duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;


