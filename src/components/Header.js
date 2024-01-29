import React, {useState, useEffect} from 'react';
import {FaPhone, FaEnvelope, FaBars, FaTimes} from 'react-icons/fa';

const Header = ({HeroSectionRef, OurMissionRef, AboutUsRef, ServicesRef, ProductSliderRef}) => {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <header id="navbar"
                className={`bg-customDark shadow-2xl p-2 text-center fixed w-full z-50 transition-all duration-300 ease-in-out ${isNavVisible ? 'top-0' : '-top-20'}`}>
            <div className="flex justify-between md:justify-center items-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-textAnimate text-white font-dancing-script md:hidden">Amarant</h1>
                {/* Burger menu icon */}
                <div className="md:hidden">
                    <FaBars className="text-2xl cursor-pointer text-white"
                            onClick={() => setIsMobileMenuOpen(true)}/>
                </div>
            </div>

            {/* Mobile menu */}
            <nav
                className={`absolute top-0 left-0 w-full h-screen bg-customDark flex flex-col justify-center items-center transform z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <FaTimes className="text-2xl cursor-pointer absolute top-5 right-5 text-white z-50"
                         onClick={() => setIsMobileMenuOpen(false)}/>
                {/* Mobile Navigation items */}
                <button onClick={() => scrollToSection(HeroSectionRef)}
                        className="text-white my-4 text-2xl hover:underline hover:underline-offset-8">Home
                </button>
                <button onClick={() => scrollToSection(OurMissionRef)}
                        className="text-white my-4 text-2xl hover:underline hover:underline-offset-8">Our Mission
                </button>
                <button onClick={() => scrollToSection(AboutUsRef)}
                        className="text-white my-4 text-2xl hover:underline hover:underline-offset-8">About Us
                </button>
                <button onClick={() => scrollToSection(ServicesRef)}
                        className="text-white my-4 text-2xl hover:underline hover:underline-offset-8">Services
                </button>
                <button onClick={() => scrollToSection(ProductSliderRef)}
                        className="text-white my-4 text-2xl hover:underline hover:underline-offset-8">Products
                </button>
                {/* Contact section with icons */}
                <div className="absolute bottom-0 right-0 mb-4 mr-14 md:mr-4 text-white text-sm md:text-base">
                    <p className="flex items-center mb-2"><FaPhone className="mr-2"/>+371 12 456 789</p>
                    <p className="flex items-center"><FaEnvelope className="mr-2"/>silmezs@example.com</p>
                </div>
            </nav>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-center text-xl gap-2">
                <h1 className="text-2xl font-bold mt-1 pr-10 text-white hidden md:flex font-greatVibes">Amarant</h1>
                <button onClick={() => scrollToSection(HeroSectionRef)}
                        className="text-white hover:underline hover:underline-offset-8 px-4 border-r-2 pl-0">Home
                </button>
                <button onClick={() => scrollToSection(OurMissionRef)}
                        className="text-white hover:underline hover:underline-offset-8 px-4 border-r-2">Our Mission
                </button>
                <button onClick={() => scrollToSection(AboutUsRef)}
                        className="text-white hover:underline hover:underline-offset-8 px-4 border-r-2">About Us
                </button>
                <button onClick={() => scrollToSection(ServicesRef)}
                        className="text-white hover:underline hover:underline-offset-8 px-4 border-r-2">Services
                </button>
                <button onClick={() => scrollToSection(ProductSliderRef)}
                        className="text-white hover:underline hover:underline-offset-8">Products
                </button>
            </nav>
        </header>
    );
};
export default Header;



