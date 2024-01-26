import React, {useState, useEffect} from 'react';

const categoryDetails = {
    Marble: {
        title: "Elegance in Stone",
        description: "Discover the timeless beauty of marble interiors.",
        image: '/images/Marble.jpg',
    },
    Glass: {
        title: "Transparency and Light",
        description: "Explore the purity and openness of glass designs.",
        image: '/images/Glass.jpg',
    },
    Classic: {
        title: "Vintage",
        description: "Embrace culture and vintage style of living.",
        image: '/images/Classic.jpg',
    },
    Modern: {
        title: "Modern Minimalism",
        description: "Find the essence of modern design in simplicity.",
        image: '/images/Modern.jpg',
    },
};

const MainSection = () => {
    const [category, setCategory] = useState('Marble');
    const [isAutomatic, setIsAutomatic] = useState(true);

    useEffect(() => {
        let intervalId;
        if (isAutomatic) {
            intervalId = setInterval(() => {
                setCategory(prevCategory => {
                    const categoryKeys = Object.keys(categoryDetails);
                    let currentCategoryIndex = categoryKeys.indexOf(prevCategory);
                    let nextCategoryIndex = (currentCategoryIndex + 1) % categoryKeys.length;
                    return categoryKeys[nextCategoryIndex];
                });
            }, 4000);
        }

        return () => clearInterval(intervalId);
    }, [isAutomatic]);

    const handleCategoryChange = (newCategory) => {
        setIsAutomatic(false);
        setCategory(newCategory);
        if (window.autoCycleTimeout) {
            clearTimeout(window.autoCycleTimeout);
        }
        window.autoCycleTimeout = setTimeout(() => {
            setIsAutomatic(true);
        }, 10000);
    };

    useEffect(() => {
        return () => {
            if (window.autoCycleTimeout) {
                clearTimeout(window.autoCycleTimeout);
            }
        };
    }, []);

    const {title, description} = categoryDetails[category];

    return (
        <section className="relative bg-customGray text-customDark overflow-hidden h-screen md:mt-36">
            <div className="flex flex-row h-full">
                {/* Logo */}
                <div className="w-1/3 hidden md:flex justify-start items-start bg-customDarkGray">
                    <img
                        src="/images/MainLogo.jpg"
                        alt="Logo"
                        className="w-40 h-40"
                    />
                </div>
                {/*Title and Description*/}
                <div
                    className="bg-customDark w-full md:w-1/2 xl:w-[40%] h-1/3 md:h-2/5 absolute z-20 md:ml-40 xl:ml-72 mt-72 shadow-2xl">
                    <div className="flex flex-col items-center md:items-start justify-center h-full pl-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-customGray font-dancing-script">{title}</h2>
                        <p className="text-lg lg:text-xl text-customGray">{description}</p>
                    </div>
                </div>
                {/* Design Image */}
                <div className="w-full md:w-2/3 relative">
                    {Object.values(categoryDetails).map((item, index) => (
                        <div
                            key={item.image}
                            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                                category === Object.keys(categoryDetails)[index] ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{backgroundImage: `url('${item.image}')`}}
                        />
                    ))}
                    {/* Buttons */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                        {Object.keys(categoryDetails).map((cat) => (
                            <button
                                key={cat}
                                className={`py-2 px-6 rounded-full ${
                                    category === cat ? 'bg-customGray' : 'bg-customDark'
                                } text-customGray`}
                                onClick={() => handleCategoryChange(cat)}
                            >
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;