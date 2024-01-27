import React, { useState } from 'react';
import ContactUsModal from './ContactUsModal';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="relative">
            <img src="/images/HeroSection.jpg" alt="Interior" className="w-full h-auto min-h-[200px] object-cover" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4">
                <img src="/images/logoSilmezs.jpg" alt="Silmežs Logo" className="mx-auto w-[50%] min-w-[100px] h-auto min-h-[50px] object-contain" />

                <button
                    className="mt-4 px-4 py-2 text-white rounded text-lg sm:text-xl md:text-2xl bg-transparent border-2 sm:border-3 md:border-4 border-white hover:border-customDark hover:bg-customDark ease-in-out duration-300 break-words max-w-full"
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




