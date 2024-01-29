import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactUsModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-60">
            <div className="bg-customDark rounded-lg w-full max-w-4xl mx-auto overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/2 p-4 lg:p-8 bg-customDark">
                        <button onClick={onClose} className="text-white absolute top-0 right-0 mt-4 mr-4">
                            <AiOutlineClose size={24} />
                        </button>
                        <h2 className="text-xl md:text-2xl text-white font-semibold mb-4">Contact Information</h2>
                        <p className="text-white"><span className="font-bold">Email: </span>Amarant@example.com</p>
                        <p className="text-white"><span className="font-bold">Phone: </span>+371 29 123 457</p>
                        <div className="flex mt-4">
                            {/* Social Media Links */}
                            <a href="/facebook" className="hover:text-customGray text-white transition mx-2">
                                <FaFacebookF/>
                            </a>
                            <a href="/twitter" className="hover:text-customGray text-white transition mx-2">
                                <FaTwitter/>
                            </a>
                            <a href="/instagram" className="hover:text-customGray text-white transition mx-2">
                                <FaInstagram/>
                            </a>
                            <a href="/linkedin" className="hover:text-customGray text-white transition mx-2">
                                <FaLinkedinIn/>
                            </a>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <img src="/images/Amarant.jpg" alt="Logo" className="w-16 h-16 md:w-32 md:h-28 bg-white rounded-2xl shadow" />
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-white p-4 lg:p-8">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Last Name"
                                className="w-full bg-transparent placeholder-customDark border-b border-customDark text-customDark py-2 focus:outline-none"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full bg-transparent placeholder-customDark border-b border-customDark text-customDark py-2 focus:outline-none"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full bg-transparent placeholder-customDark border-b border-customDark text-customDark py-2 focus:outline-none"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="w-full bg-transparent placeholder-customDark border-b border-customDark text-customDark py-2 focus:outline-none"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-customDark text-white py-2 rounded-md hover:bg-opacity-90 transition ease-in-out duration-300"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsModal;

