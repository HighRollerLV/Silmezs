import React, {useRef} from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OurMission from './components/OurMission';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ProductSlider from './components/ProductSlider';
import Footer from './components/Footer';
import './index.css';

function App() {
    const HeroSectionRef = useRef(null);
    const OurMissionRef = useRef(null);
    const AboutUsRef = useRef(null);
    const ServicesRef = useRef(null);
    const ProductSliderRef = useRef(null);
    const sliderImages = ['/images/OpenBedroom.jpg', '/images/OpenBedroom2.jpg',
        '/images/OpenBedroom3.jpg', '/images/OpenBedroom4.jpg', '/images/MarbleOffice.jpg',
        '/images/MarbleOffice2.jpg', '/images/MarbleOffice3.jpg', '/images/MarbleOffice4.jpg',
        '/images/OpenLivingRoom.jpg'];

    return (
        <div className="App">
            <Header
                HeroSectionRef={HeroSectionRef}
                OurMissionRef={OurMissionRef}
                AboutUsRef={AboutUsRef}
                ServicesRef={ServicesRef}
                ProductSliderRef={ProductSliderRef}
            />
            <main>
                <div ref={HeroSectionRef}>
                    <HeroSection/>
                </div>
                <div ref={OurMissionRef}>
                    <OurMission/>
                </div>
                <div ref={AboutUsRef}>
                    <AboutUs/>
                </div>
                <div ref={ServicesRef}>
                    <Services/>
                </div>
                <div ref={ProductSliderRef}>
                    <ProductSlider images={sliderImages}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
