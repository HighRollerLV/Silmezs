import React from 'react';
import {MdDesignServices, MdBuild, MdOutlineAutoAwesomeMosaic, MdOutlineAutoFixHigh} from 'react-icons/md';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Interior Design',
            description: 'Experience tailored designs that reflect your unique style and personality. Our team specializes in creating aesthetically pleasing and functional interiors, ensuring every element from color schemes to furniture placement resonates with your vision.',
            icon: <MdDesignServices size={80}/>
        },
        {
            id: 2,
            title: 'Renovation',
            description: 'Transform your spaces with our innovative and efficient renovation solutions. We focus on modernizing and revitalizing your environment, ensuring the best use of space and integrating the latest trends and materials for a fresh, new look.',
            icon: <MdBuild size={80}/>
        },
        {
            id: 3,
            title: 'Space Planning',
            description: 'Our space planning service is dedicated to optimizing every square inch of your space for functionality and aesthetics. We meticulously analyze your area to create a seamless flow, ensuring each zone is perfectly utilized and harmoniously integrated.',
            icon: <MdOutlineAutoAwesomeMosaic size={80}/>
        },
        {
            id: 4,
            title: 'Custom Solutions',
            description: 'Get unique, bespoke solutions for your unique spaces. Our custom design services cater to your specific needs and challenges, offering innovative and creative solutions that are tailored to suit the individual characteristics of your space.',
            icon: <MdOutlineAutoFixHigh size={80}/>
        }
    ];

    return (
        <div id="services" className="py-16 flex flex-col items-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
            <h2 className="text-4xl md:text-6xl font-bold text-center font-greatVibes text-customDark">Services</h2>
            <div className="w-10 h-1 mt-4 bg-customDark"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-4 md:px-8 2xl:px-72">
                {services.map(service => (
                    <div key={service.id} className="text-center flex flex-col items-center gap-2 mx-2">
                        <div className="flex items-center justify-center mb-2 border-customDark border-4 text-customDark rounded-full p-4 sm:p-6 md:p-8 lg:p-10">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 flex items-center justify-center">
                                {service.icon}
                            </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
                        <p className="mt-10 px-2 text-sm md:text-base">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;