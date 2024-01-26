import React from 'react';

const AboutUs = () => {
    return (
        <div id="aboutUs" className="flex flex-col md:flex-row ">
            <img src="/images/Meeting.jpg" alt="About Us" className="w-full md:w-1/2" />
            <div className="p-8 bg-customGray md:w-1/2 flex flex-col items-center justify-center gap-10">
                <h2 className="text-5xl font-bold"><span className="text-white">ABOUT</span> US</h2>
                <p className="px-60 text-center text-sm">
                    Silmežs, founded in 2010, has been at the forefront of interior design, blending contemporary aesthetics with functional elegance. Our team of expert designers is dedicated to creating spaces that reflect our clients' unique personalities and lifestyles. With a focus on sustainability and artistry, we transform ordinary spaces into extraordinary homes and offices. Join us in our journey to redefine interior design.
                </p>
                <p className="px-60 text-center text-sm">If you'd like to speak with us about a future project, feel free to contact us.</p>
            </div>
        </div>
    );
};

export default AboutUs;
