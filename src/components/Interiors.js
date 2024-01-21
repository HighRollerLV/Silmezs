import React, { useState, useEffect, useMemo } from 'react';

const Interiors = () => {
    const interiors = useMemo(() => [
        { name: 'Classic', images: ['/images/Classic.jpg', '/images/Classic2.jpg', '/images/Classic3.jpg'] },
        { name: 'Open', images: ['/images/Glass.jpg', '/images/Glass2.jpg', '/images/Glass3.jpg'] },
        { name: 'Marble', images: ['/images/Marble.jpg', '/images/Marble2.jpg', '/images/Marble3.jpg'] },
        { name: 'Modern', images: ['/images/Modern.jpg', '/images/Modern2.jpg', '/images/Modern3.jpg'] },
    ], []);

    const [imageIndexes, setImageIndexes] = useState(interiors.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndexes((prevIndexes) =>
                prevIndexes.map((prevIndex, index) => (prevIndex + 1) % interiors[index].images.length)
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [interiors]);

    return (
        <section className="bg-customGray text-customDark">
            <div className="mx-auto p-4">
                <h2 className="mt-16 mb-10 text-3xl font-bold tracking-wider">Interior</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-20">
                    {interiors.map((interior, index) => (
                        <div key={index} className="relative overflow-hidden">
                            {interior.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={image}
                                    alt={`Interior ${index + 1}`}
                                    className={`w-full h-auto transition-opacity duration-2000 ${
                                        imgIndex === imageIndexes[index] ? 'opacity-100' : 'opacity-0 absolute inset-0'
                                    }`}
                                />
                            ))}
                            <p className="text-lg mt-4 ">{interior.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interiors;
