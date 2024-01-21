import React, {useState, useEffect} from 'react';
import {FaPhone, FaEnvelope} from 'react-icons/fa'; // Importing icons

const Header = ({mainRef, interiorsRef, aboutRef, contactRef}) => {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const scrollToSection = (sectionRef) => {
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <header id="navbar"
                className={`bg-customDark p-4 text-center fixed w-full z-50 transition-all duration-300 ease-in-out ${isNavVisible ? 'top-0' : '-top-20'}`}>
            <h1 className="text-4xl font-bold mb-4 animate-textAnimate font-old-standard-tt text-customGray">Silmežs</h1>
            <nav className="flex justify-center mt-10">
                {/* Navigation items */}
                <button onClick={() => scrollToSection(mainRef)}
                        className="text-customGray mx-4 ease-in-out transition duration-300 hover:underline underline-offset-8">Home
                </button>
                <button onClick={() => scrollToSection(interiorsRef)}
                        className="text-customGray mx-4 ease-in-out transition duration-300 hover:underline underline-offset-8">Interior
                </button>
                <button onClick={() => scrollToSection(aboutRef)}
                        className="text-customGray mx-4 ease-in-out transition duration-300 hover:underline underline-offset-8">About
                    Us
                </button>
                <button onClick={() => scrollToSection(contactRef)}
                        className="text-customGray mx-4 ease-in-out transition duration-300 hover:underline underline-offset-8">Contact
                </button>
            </nav>

            {/* Contact section with icons */}
            <div className="absolute top-0 right-0 mt-4 mr-4 text-customGray">
                <p className="flex items-center mb-2"><FaPhone className="mr-2"/>+371 12 456 789</p>
                <p className="flex items-center"><FaEnvelope className="mr-2"/>silmezs@example.com</p>
            </div>
        </header>
    );
};

export default Header;