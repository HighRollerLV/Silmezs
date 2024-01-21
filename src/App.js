// App.js
import React from 'react';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Interiors from "./components/Interiors"; // Import the Interiors component

const App = () => {
    return (
        <div>
            <Header />
            <MainSection />
            <Interiors /> {/* Add the Interiors component here */}
            <Footer />
        </div>
    );
};

export default App;