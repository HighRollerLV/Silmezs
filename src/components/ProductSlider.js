import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import '../App.css';

const ProductSlider = ({images}) => {
    const [slidesPerView, setSlidesPerView] = useState(2);

    const updateSlidesPerView = () => {
        const width = window.innerWidth;
        if (width < 640) { //'sm' breakpoint
            setSlidesPerView(1);
        } else if (width < 768) { // 'md' breakpoint
            setSlidesPerView(2);
        } else if (width < 1024) { // 'lg' breakpoint
            setSlidesPerView(2);
        } else { // 'xl' and larger
            setSlidesPerView(2);
        }
    };

    useEffect(() => {
        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => window.removeEventListener('resize', updateSlidesPerView);
    }, []);

    return (
        <div id="products"
             className="flex justify-center items-center py-5 sm:py-7 md:py-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={5}
                slidesPerView={slidesPerView}
                loop={true}
                speed={2000}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet custom-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active custom-pagination-bullet-active'
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index}`} className="w-full h-auto img-zoom"/>
                    </SwiperSlide>
                ))}
                <button className="swiper-button-prev font-bold" style={{color: '#6A001A'}}>
                    <FaArrowLeft size={30}/>
                </button>
                <button className="swiper-button-next font-bold" style={{color: '#6A001A'}}>
                    <FaArrowRight size={30}/>
                </button>
            </Swiper>
        </div>
    );
};

export default ProductSlider;




