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
    Open: {
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

    // This effect sets up the automatic switching
    useEffect(() => {
        const categoryKeys = Object.keys(categoryDetails);
        let currentCategoryIndex = categoryKeys.indexOf(category);
        const switchCategory = () => {
            currentCategoryIndex = (currentCategoryIndex + 1) % categoryKeys.length;
            setCategory(categoryKeys[currentCategoryIndex]);
        };

        if (isAutomatic) {
            const intervalId = setInterval(switchCategory, 4000);
            return () => clearInterval(intervalId);
        }
    }, [category, isAutomatic]);

    const handleCategoryChange = (newCategory) => {
        setIsAutomatic(false);
        setCategory(newCategory);
        if (window.autoCycleTimeout) {
            clearTimeout(window.autoCycleTimeout);
        }
        // Restart automatic cycling after a delay
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
        <section className="relative h-screen bg-customGray text-customDark overflow-hidden">
            {Object.values(categoryDetails).map((item, index) => (
                <div
                    key={item.image}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                        category === Object.keys(categoryDetails)[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{backgroundImage: `url('${item.image}')`}}
                />
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h2 className="text-7xl font-semibold mb-4 text-white">{title}</h2>
                <p className="text-xl mb-8 text-white">{description}</p>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
                {Object.keys(categoryDetails).map((cat) => (
                    <button
                        key={cat}
                        className={`py-4 px-6 rounded-full ${
                            category === cat ? 'bg-customGold' : 'bg-customPurple'
                        } text-white transition-all duration-300 ease-in-out`}
                        onClick={() => handleCategoryChange(cat)}
                    >
                    </button>
                ))}
            </div>
        </section>
    );
};

export default MainSection;