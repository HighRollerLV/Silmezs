import React, {useState, useEffect, useMemo} from 'react';

const Interiors = () => {
    const interiors = useMemo(() => [
        {name: 'Classic', images: ['/images/Classic.jpg', '/images/Classic2.jpg', '/images/Classic3.jpg']},
        {name: 'Open', images: ['/images/Glass.jpg', '/images/Glass2.jpg', '/images/Glass3.jpg']},
        {name: 'Marble', images: ['/images/Marble.jpg', '/images/Marble2.jpg', '/images/Marble3.jpg']},
        {name: 'Modern', images: ['/images/Modern.jpg', '/images/Modern2.jpg', '/images/Modern3.jpg']},
    ], []);

    const [imageIndexes, setImageIndexes] = useState(interiors.map(() => 0));
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const cycleImages = () => {
            setImageIndexes((prevIndexes) =>
                prevIndexes.map((prevIndex, index) => (prevIndex + 1) % interiors[index].images.length)
            );
        };

        let interval = setInterval(cycleImages, 4000);

        if (isPaused) {
            clearInterval(interval);
            setTimeout(() => {
                setIsPaused(false);
                interval = setInterval(cycleImages, 4000);
            }, 7000);
        }

        return () => clearInterval(interval);
    }, [interiors, isPaused]);

    const switchImage = (index, direction) => {
        setImageIndexes((prevIndexes) =>
            prevIndexes.map((prevIndex, idx) => {
                if (idx === index) {
                    const length = interiors[index].images.length;
                    return (prevIndex + direction + length) % length;
                }
                return prevIndex;
            })
        );
        setIsPaused(true);
    };

    return (
        <section className="bg-customGray text-customDark">
            <div className="mx-auto p-4">
                <h2 className="mt-16 mb-10 text-5xl font-bold tracking-wider font-dancing-script">Interior</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 mb-20">
                    {interiors.map((interior, index) => (
                        <div key={index} className="relative overflow-hidden">
                            <button
                                onClick={() => switchImage(index, -1)}
                                className="absolute left-0 bottom-6 transform -translate-y-1/2 z-10 bg-customDark p-1 text-customGray hover:bg-customLight hover:scale-105 focus:scale-95 transition duration-300 ease-in-out">
                                &#9664;
                            </button>
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
                            <button
                                onClick={() => switchImage(index, 1)}
                                className="absolute right-0 bottom-6 transform -translate-y-1/2 z-10 bg-customDark p-1 text-customGray hover:bg-customLight hover:scale-105 focus:scale-95 transition duration-300 ease-in-out">
                                &#9654;
                            </button>
                            <p className="text-xl font-semibold underline underline-offset-8 mt-1 mb-2">{interior.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interiors;
