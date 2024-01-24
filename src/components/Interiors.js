import React, {useState, useEffect, useMemo} from 'react';
import {IoMdArrowRoundForward, IoMdArrowRoundBack, IoMdClose} from 'react-icons/io';

const Interiors = () => {
    const interiors = useMemo(() => [
        {
            name: 'Classic',
            images: ['/images/Classic.jpg', '/images/Classic2.jpg', '/images/Classic3.jpg'],
            categories: [
                {
                    name: 'Living Room',
                    representativeImage: '/images/ClassicLivingRoom.jpg',
                    images: ['/images/ClassicLivingRoom2.jpg', '/images/ClassicLivingRoom3.jpg', '/images/ClassicLivingRoom4.jpg', '/images/ClassicLivingRoom5.jpg']
                },
                {
                    name: 'Bathroom',
                    representativeImage: '/images/ClassicBathroom.jpg',
                    images: ['/images/ClassicBathroom2.jpg', '/images/ClassicBathroom3.jpg', '/images/ClassicBathroom4.jpg']
                },
            ],
        },
        {
            name: 'Open',
            images: ['/images/Glass.jpg', '/images/Glass2.jpg', '/images/Glass3.jpg'],
            categories: [
                {
                    name: 'Bedroom',
                    representativeImage: '/images/OpenBedroom.jpg',
                    images: ['/images/OpenBedroom2.jpg', '/images/OpenBedroom3.jpg', '/images/OpenBedroom4.jpg']
                },
                {
                    name: 'Living Room',
                    representativeImage: '/images/OpenLivingRoom.jpg',
                    images: ['/images/OpenLivingRoom2.jpg', '/images/OpenLivingRoom3.jpg', '/images/OpenLivingRoom4.jpg']
                },
            ],
        },
        {
            name: 'Marble',
            images: ['/images/Marble.jpg', '/images/Marble2.jpg', '/images/Marble3.jpg'],
            categories: [
                {
                    name: 'Office',
                    representativeImage: '/images/MarbleOffice.jpg',
                    images: ['/images/MarbleOffice2.jpg', '/images/MarbleOffice3.jpg', '/images/MarbleOffice4.jpg']
                },
                {
                    name: 'Living Room',
                    representativeImage: '/images/MarbleLivingRoom.jpg',
                    images: ['/images/MarbleLivingRoom2.jpg', '/images/MarbleLivingRoom3.jpg', '/images/MarbleLivingRoom4.jpg']
                },
            ],
        },
        {
            name: 'Modern',
            images: ['/images/Modern.jpg', '/images/Modern2.jpg', '/images/Modern3.jpg'],
            categories: [
                {
                    name: 'Bathroom',
                    representativeImage: '/images/ModernBathroom.jpg',
                    images: ['/images/ModernBathroom2.jpg', '/images/ModernBathroom3.jpg', '/images/ModernBathroom4.jpg']
                },
                {
                    name: 'Kitchen',
                    representativeImage: '/images/ModernKitchen.jpg',
                    images: ['/images/ModernKitchen2.jpg', '/images/ModernKitchen3.jpg', '/images/ModernKitchen4.jpg']
                },
            ],
        },
    ], []);

    const [imageIndexes, setImageIndexes] = useState(interiors.map(() => 0));
    const [selectedInterior, setSelectedInterior] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [isCategoryPaused, setIsCategoryPaused] = useState(false);

    // Cycle main interior images
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndexes(prevIndexes =>
                prevIndexes.map((index, i) => (index + 1) % interiors[i].images.length)
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [interiors]);

    // Cycle selected category images
    useEffect(() => {
        let interval;
        if (selectedCategory && !isCategoryPaused) {
            interval = setInterval(() => {
                setSelectedCategoryIndex(prevIndex => (prevIndex + 1) % selectedCategory.images.length);
            }, 4000);
        }

        return () => clearInterval(interval);
    }, [selectedCategory, isCategoryPaused]);

    const openCategoryBox = (interior) => {
        setSelectedInterior(interior);
        setSelectedCategory(null);
    };

    const selectCategory = (category) => {
        const categoryIndex = selectedInterior.categories.findIndex(c => c.name === category.name);
        setSelectedCategory(category);
        setSelectedCategoryIndex(categoryIndex);
        setIsCategoryPaused(false);
    };

    const cycleCategoryImage = (direction) => {
        setIsCategoryPaused(true);
        setSelectedCategoryIndex(prevIndex => {
            const length = selectedCategory.images.length;
            return (prevIndex + direction + length) % length;
        });
    };

    const cycleCategoryType = (interior, direction) => {
        setSelectedInterior(interior);
        setSelectedCategoryIndex(prevIndex => {
            const length = interior.categories.length;
            return (prevIndex + direction + length) % length;
        });
        setSelectedCategory(null);
    };

    return (
        <section className="bg-customGray text-customDark">
            <div className="mx-auto p-4">
                <h2 className="mt-16 mb-10 text-5xl font-bold tracking-wider font-dancing-script">Interior</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 mb-20">
                    {interiors.map((interior, index) => (
                        <div key={index} className="relative overflow-hidden">
                            <button
                                onClick={() => setImageIndexes(prevIndexes =>
                                    prevIndexes.map((prevIndex, idx) => idx === index ? (prevIndex - 1 + interiors[index].images.length) % interiors[index].images.length : prevIndex))
                                }
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-customDark p-1 text-customGray hover:bg-customLight hover:scale-105 focus:scale-95 transition duration-300 ease-in-out">
                                <IoMdArrowRoundBack/>
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
                                onClick={() => setImageIndexes(prevIndexes =>
                                    prevIndexes.map((prevIndex, idx) => idx === index ? (prevIndex + 1) % interiors[index].images.length : prevIndex))
                                }
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-customDark p-1 text-customGray hover:bg-customLight hover:scale-105 focus:scale-95 transition duration-300 ease-in-out">
                                <IoMdArrowRoundForward/>
                            </button>
                            <p onClick={() => openCategoryBox(interior)}
                               className="text-xl font-semibold underline underline-offset-8 mt-1 mb-2 cursor-pointer">
                                {interior.name}
                            </p>
                        </div>
                    ))}
                </div>
                {selectedInterior && selectedInterior.categories[selectedCategoryIndex] && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="w-3/4 md:w-1/2 lg:w-1/3 flex flex-col">
                            <div className="relative">
                                <img src={selectedInterior.categories[selectedCategoryIndex].representativeImage}
                                     alt={selectedInterior.categories[selectedCategoryIndex].name}
                                     className="w-full rounded-xl"/>
                                {selectedInterior.categories.map((category, idx) => (
                                    <button key={idx} onClick={() => selectCategory(category)}
                                            className="absolute inset-0 flex justify-center items-center w-full h-full bg-opacity-50 bg-black hover:bg-opacity-70 cursor-pointer rounded-xl">
                                        <span
                                            className="text-2xl font-semibold text-white hover:underline">{selectedInterior.categories[selectedCategoryIndex].name}</span>
                                    </button>
                                ))}
                                <IoMdClose onClick={() => setSelectedInterior(null)}
                                           className="absolute top-4 right-4 cursor-pointer text-2xl text-white"/>
                                <IoMdArrowRoundBack onClick={() => cycleCategoryType(selectedInterior, -1)}
                                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-white hover:text-customDark"/>
                                <IoMdArrowRoundForward onClick={() => cycleCategoryType(selectedInterior, 1)}
                                                       className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-white hover:text-customDark"/>
                            </div>
                        </div>
                    </div>
                )}
                {selectedCategory && (
                    <div className="fixed inset-0 z-60 bg-black bg-opacity-50 flex justify-center items-center">
                        <div
                            className="bg-white p-4 border border-gray-200 shadow-lg rounded-md w-3/4 md:w-1/2 lg:w-1/3 flex flex-col items-center">
                            <IoMdClose onClick={() => setSelectedCategory(null)}
                                       className="self-end cursor-pointer text-2xl"/>
                            <h3 className="text-xl font-bold mb-4">{selectedCategory.name}</h3>
                            <div className="relative">
                                <img src={selectedCategory.images[selectedCategoryIndex]} alt={selectedCategory.name}
                                     className="max-w-xs max-h-96"/>
                                <IoMdArrowRoundBack onClick={() => cycleCategoryImage(-1)}
                                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl"/>
                                <IoMdArrowRoundForward onClick={() => cycleCategoryImage(1)}
                                                       className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl"/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Interiors;
