import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-customGray p-32 text-customDark">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 text-customGray bg-customDark px-6 py-6 rounded-md">
                    <h2 className="text-5xl font-semibold mb-4">Contact Information</h2>
                    <p className="mb-2 text-2xl"><span className="font-bold">Street: </span>Valdemara, bld. 159</p>
                    <p className="mb-2 text-2xl"><span className="font-bold">City: </span>Riga, LV-1010</p>
                    <p className="mb-2 text-2xl"><span className="font-bold">Country: </span>Latvia</p>
                    <p className="mb-2 text-2xl"><span className="font-bold">Email: </span>Silmežs@example.com</p>
                    <p className="mb-2 text-2xl"><span className="font-bold">Phone: </span>+371 29 123 457</p>
                </div>
                <div className="w-full md:w-1/2">
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customDark focus:border-transparent"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customDark focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customDark focus:border-transparent"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customDark focus:border-transparent"
                            rows="4"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-customDark text-white rounded-md hover:bg-opacity-90 ease-in-out duration-1000"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

