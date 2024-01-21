// App.js
import React from 'react';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Interiors from "./components/Interiors";
import AboutUs from "./components/About";
import ContactUs from "./components/ContactUs";

const App = () => {
    return (
        <div>
            <Header />
            <MainSection />
            <Interiors />
            <AboutUs />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default App;