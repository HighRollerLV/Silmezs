import React, { useState } from 'react';

const OurMission = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const imageDescriptions = [
        "Elegant Classic Living Room with Timeless Decor",
        "Contemporary Workspace Blending Style and Comfort",
        "Modern Dining Area with Artistic Flair",
        "Cozy Bedroom with a Touch of Modern Elegance",
        "Spacious and Bright Open Concept Living Space",
        "Luxurious Bathroom with Sleek Design Elements"
    ];

    return (
        <div id="ourMission" className="py-16 flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-greatVibes text-customDark px-4 sm:px-12 md:px-24 lg:px-52 xl:px-72">Our Mission</h2>
            <div className="w-10 h-1 bg-customDark mt-4"></div>
            <div className="px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 text-center pb-6">
                <p className="mt-4 text-sm sm:text-base md:text-lg">
                    Our mission at Amarant is to redefine the essence of living and working spaces. We believe in crafting environments that resonate with the personal style and functional needs of our clients. Our approach combines modern design principles with timeless elegance, ensuring each space we create is not only aesthetically pleasing but also practical and sustainable.
                </p>
                <p className="text-lg md:text-xl mt-4 font-bold">Let's make your dreams become reality.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div
                        key={item}
                        onMouseEnter={() => setHoveredImage(index)}
                        onMouseLeave={() => setHoveredImage(null)}
                        onTouchStart={() => setHoveredImage(index)}
                        className="relative"
                    >
                        <img src={`/images/ClassicLivingRoom${item}.jpg`} alt={`Mission ${item}`} className="w-full h-auto object-cover"/>
                        {hoveredImage === index && (
                            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
                                <p className="text-white text-center text-xs sm:text-sm md:text-base">{imageDescriptions[index]}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurMission;

