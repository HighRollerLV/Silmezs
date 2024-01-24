import React, {useState, useEffect} from 'react';
import {FaPhone, FaEnvelope, FaBars, FaTimes} from 'react-icons/fa';
import ContactForm from "./ContactForm";

const Header = ({mainRef, interiorsRef, aboutRef}) => {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);

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
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {showContactForm && <ContactForm onClose={() => setShowContactForm(false)}/>}
            <header id="navbar"
                    className={`bg-customDark p-4 text-center fixed w-full z-50 transition-all duration-300 ease-in-out ${isNavVisible ? 'top-0' : '-top-20'}`}>
                <div className="flex justify-between md:justify-center items-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-textAnimate text-customGray font-dancing-script">Silmežs</h1>

                    {/* Burger menu icon */}
                    <div className="md:hidden">
                        <FaBars className="text-2xl cursor-pointer text-customGray"
                                onClick={() => setIsMobileMenuOpen(true)}/>
                    </div>
                </div>

                {/* Mobile menu */}
                <nav
                    className={`absolute top-0 left-0 w-full h-screen bg-customDark flex flex-col justify-center items-center transform z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                    <FaTimes className="text-2xl cursor-pointer absolute top-5 right-5 text-customGray z-50"
                             onClick={() => setIsMobileMenuOpen(false)}/>
                    {/* Mobile Navigation items */}
                    <button onClick={() => scrollToSection(mainRef)} className="text-customGray my-4 text-3xl">Home
                    </button>
                    <button onClick={() => scrollToSection(interiorsRef)}
                            className="text-customGray my-4 text-3xl">Interior
                    </button>
                    <button onClick={() => scrollToSection(aboutRef)} className="text-customGray my-4 text-3xl">About Us
                    </button>
                    <button onClick={() => setShowContactForm(true)}
                            className="text-customGray my-4 text-3xl">Contact
                    </button>
                </nav>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex justify-center mt-6 text-xl">
                    <button onClick={() => scrollToSection(mainRef)}
                            className="text-customGray mx-4 hover:underline hover:underline-offset-8">Home
                    </button>
                    <button onClick={() => scrollToSection(interiorsRef)}
                            className="text-customGray mx-4 hover:underline hover:underline-offset-8">Interior
                    </button>
                    <button onClick={() => scrollToSection(aboutRef)}
                            className="text-customGray mx-4 hover:underline hover:underline-offset-8">About Us
                    </button>
                    <button onClick={() => setShowContactForm(true)}
                            className="text-customGray mx-4 hover:underline hover:underline-offset-8">Contact
                    </button>
                </nav>

                {/* Contact section with icons */}
                <div className="absolute top-0 right-0 mt-4 mr-14 md:mr-4 text-customGray text-sm md:text-base">
                    <p className="flex items-center mb-2"><FaPhone className="mr-2"/>+371 12 456 789</p>
                    <p className="flex items-center"><FaEnvelope className="mr-2"/>silmezs@example.com</p>
                </div>
            </header>
        </>
    );
};

export default Header;
