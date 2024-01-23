// App.js
import React, {useRef} from 'react';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Interiors from "./components/Interiors";
import AboutUs from "./components/About";

const App = () => {
    const mainSectionRef = useRef(null);
    const interiorsRef = useRef(null);
    const aboutUsRef = useRef(null);

    return (
        <div>
            <Header
                mainRef={mainSectionRef}
                interiorsRef={interiorsRef}
                aboutRef={aboutUsRef}
            />
            <div ref={mainSectionRef}><MainSection/></div>
            <div ref={interiorsRef}><Interiors/></div>
            <div ref={aboutUsRef}><AboutUs/></div>
            <Footer/>
        </div>
    );
};

export default App;