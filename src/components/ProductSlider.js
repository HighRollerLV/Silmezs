import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductSlider = ({ images }) => {
    const [currentIndices, setCurrentIndices] = useState([0, 1]);

    const goToPrevious = () => {
        const newIndices = currentIndices.map(index => index === 0 ? images.length - 1 : index - 1);
        setCurrentIndices(newIndices);
    };

    const goToNext = () => {
        const newIndices = currentIndices.map(index => index === images.length - 1 ? 0 : index + 1);
        setCurrentIndices(newIndices);
    };

    return (
        <div id="products" className="flex justify-center items-center my-10">
            <button onClick={goToPrevious} className="mr-2">
                <FaArrowLeft size={30} />
            </button>
            <div className="flex gap-2">
                {currentIndices.map(index => (
                    <img key={index} src={images[index]} alt={`Slide ${index}`} className="w-1/2 h-auto"/>
                ))}
            </div>
            <button onClick={goToNext} className="ml-2">
                <FaArrowRight size={30} />
            </button>
        </div>
    );
};

export default ProductSlider;

