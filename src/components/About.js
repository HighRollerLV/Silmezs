import React from 'react';

const AboutUs = () => {
    return (
        <div className="flex flex-wrap py-12 md:py-24 xl:py-36 bg-customDark w-full mx-auto items-start">

            {/* Image Section */}
            <div className="w-full xl:w-1/2 flex justify-center items-center px-4">
                <img className="object-cover object-center h-auto w-full mx-auto xl:max-w-none"
                     src="/images/Meeting.jpg"
                     alt="About Us"/>
            </div>

            {/* Text Section */}
            <div className="w-full xl:w-1/2 flex flex-col items-start px-6 xl:px-10 xl:gap-10">
                <h2 className="text-3xl md:text-4xl xl:text-6xl text-customDarkGray font-bold leading-none font-sevillana mb-6 mt-4 xl:mt-0">About
                    us.</h2>
                <div className="flex flex-col xl:flex-row w-full gap-6 md:gap-10 xl:gap-20">
                    <div className="flex flex-col">
                        <p className="text-md md:text-xl xl:text-2xl text-white leading-relaxed mb-4 text-balance">
                            Focused on excellence for our clients, we are well established, with a reputation for great
                            service and a high-quality finish.
                        </p>
                    </div>

                    {/* Additional Text Elements */}
                    <div className="text-white flex flex-col gap-2 text-balance">
                        <h3 className="text-md md:text-xl xl:text-3xl text-customGray font-semibold mb-4 font-dancing-script">Our
                            Values</h3>
                        <p className="indent-8 text-sm md:text-base xl:text-xl">At our Interior Design Company, we
                            embrace creativity as the foundation of our work. We
                            strive to break conventional design boundaries, weaving innovation and artistic flair into
                            every project. Our team of skilled designers continually explores fresh ideas, infusing each
                            space with a unique touch that sparks inspiration.</p>
                        <p className="indent-8 text-sm md:text-base xl:text-xl">Quality is at the core of our practice.
                            We dedicate ourselves to delivering interior design
                            solutions that not only meet but exceed the highest standards of craftsmanship.</p>
                        <p className="indent-8 text-sm md:text-base xl:text-xl"> Our clients are the driving force
                            behind everything we do. We take great pride in providing
                            a client-centric experience where your vision and preferences are paramount. We work in
                            close collaboration with you, attentively listening to your ideas, aspirations, and
                            desires.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

