import React, { useState } from 'react';
import ContactUsModal from './ContactUsModal';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoError, setVideoError] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Handling video error
    const handleVideoError = () => {
        setVideoError(true);
    };

    return (
        <div className="relative">
            {!videoError ? (
                <video
                    src="/videos/BackgroundVideo.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto min-h-screen object-cover"
                    onError={handleVideoError}
                />
            ) : (
                <div className="w-full h-auto min-h-screen bg-gray-200 flex justify-center items-center">
                    <p className="text-xl text-gray-700">Video could not be loaded.</p>
                </div>
            )}

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 flex flex-col items-center justify-center">
                <img src="/images/Amarant.jpg" alt="Silmežs Logo"
                     className="w-3/4 min-w-[300px] h-auto object-contain"/>

                <button
                    className="mt-4 px-4 py-2 text-white rounded text-lg sm:text-xl md:text-2xl bg-transparent border-2 sm:border-3 md:border-4 border-white hover:border-customDark hover:bg-customDark transition duration-300 break-words max-w-full"
                    onClick={toggleModal}
                >
                    Contact Us
                </button>
            </div>

            <ContactUsModal isOpen={isModalOpen} onClose={toggleModal}/>
        </div>
    );
};

export default HeroSection;
