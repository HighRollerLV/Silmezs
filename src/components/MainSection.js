// MainSection.js
import React from 'react';

const MainSection = () => {
    return (
        <section className="relative h-screen bg-customGray text-customDark">
            <div className="absolute inset-0">
                <div
                    className="h-full bg-cover bg-center filter flex flex-col items-center justify-center relative"
                    style={{ backgroundImage: `url('/images/interior7.jpg')` }}
                >
                    <div className="bg-transparent opacity-90 w-2/5 h-2/5 absolute inset-0 m-auto rounded-lg"></div>
                    <div className="relative z-10 flex flex-col justify-center items-center text-center">
                        <h2 className="text-3xl font-semibold mb-6">Welcome to our Luxury World</h2>
                        <p className="mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim ac turpis tempus rutrum.
                        </p>
                        <button
                            className="bg-customPurple text-white py-2 px-4 rounded-full hover:bg-customGold transition duration-300"
                        >
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;







