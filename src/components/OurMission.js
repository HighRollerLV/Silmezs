import React from 'react';

const OurMission = () => {
    return (
        <div id="ourMission" className="mx-72 my-16 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold">OUR MISSION</h2>
            <div className="w-10 h-1 bg-black mt-4"></div>
            <p className="mt-4 text-base px-52 text-center">
                Our mission at Silmežs is to redefine the essence of living and working spaces. We believe in crafting environments that resonate with the personal style and functional needs of our clients. Our approach combines modern design principles with timeless elegance, ensuring each space we create is not only aesthetically pleasing but also practical and sustainable.
            </p>
            <p className="text-lg mt-4 text-center text-black font-bold">Let's make your dreams become reality.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <img key={item} src={`/images/ClassicLivingRoom${item}.jpg`} alt={`Mission ${item}`} className="w-full h-auto"/>
                ))}
            </div>
        </div>
    );
};

export default OurMission;
