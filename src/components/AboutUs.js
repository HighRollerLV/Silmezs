import React from 'react';

const AboutUs = () => {
    return (
        <div id="aboutUs" className="flex flex-col lg:flex-row ">
            <img src="/images/Meeting.jpg" alt="About Us" className="w-full lg:w-1/2" />

            <div className="p-4 md:p-8 bg-customDark lg:w-1/2 flex flex-col items-center justify-center gap-10">

                <h2 className="text-3xl md:text-5xl font-bold font-greatVibes">
                    <span className="text-white">About</span> Us
                </h2>

                <p className="px-4 2xl:px-36 text-center text-sm md:text-base text-white">
                    Silmežs, founded in 2010, has been at the forefront of interior design, blending contemporary aesthetics with functional elegance. Our team of expert designers is dedicated to creating spaces that reflect our clients' unique personalities and lifestyles. With a focus on sustainability and artistry, we transform ordinary spaces into extraordinary homes and offices. Join us in our journey to redefine interior design.
                </p>

                <p className="px-4 2xl:px-36 text-center text-sm md:text-base text-white">
                    If you'd like to speak with us about a future project, feel free to contact us.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;

