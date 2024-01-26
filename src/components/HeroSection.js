import React, { useState } from 'react';
import ContactUsModal from './ContactUsModal';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="relative">
            <img src="/images/HeroSection.jpg" alt="Interior" className="w-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <img src="/images/MainLogo.jpg" alt="Silmežs Logo" className="mx-auto" />
                <h1 className="text-white text-4xl font-bold">Silmežs</h1>
                <button
                    className="mt-4 px-8 py-2 bg-customDark text-white rounded text-2xl"
                    onClick={toggleModal}
                >
                    Contact Us
                </button>
            </div>
            <ContactUsModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    );
};

export default HeroSection;


