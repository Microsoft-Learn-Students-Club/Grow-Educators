import { lazy, Suspense } from "react";
import "/src/index.css";
import Typewriter from "typewriter-effect";
const Feedback = lazy(() => import("../Feedback/Feedback"));
const Card = lazy(() => import("../Cards/Card"));
const Features = lazy(() => import("../Features/Features"));
const AboutUs = lazy(() => import("../AboutUs/AboutUs"));
const Footer = lazy(() => import('../Footers/Footer'));
const Counter = lazy(() => import("../Counter/Counter"));

const Hero = () => {
    return (
        <>
            <section className="h-full md:h-screen md:pb-0 pb-4 px-4 sm:px-24">
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-0 gap-8 pt-12 mt-0 sm:pt-24 sm:pt-26">
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="font-bold text-3xl leading-3 text-blue-950">Learning with Grow Educators made</h1>
                        <div className="min-h-[96px] pl-4 md:pl-0">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    cursor: '<span class="text-primary-navy font-extralight text-5xl" style="visibility:hidden">|</span>',
                                    deleteSpeed: "natural",
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            '<span style="color:rgb(225, 19, 68); font-size:4em; font-weight:700;">Intuitive.</span>'
                                        )
                                        .pauseFor(500)
                                        .deleteAll()
                                        .typeString(
                                            '<span style="color:rgb(225, 19, 68); font-size:4em; font-weight:700;">Educate.</span>'
                                        )
                                        .pauseFor(500)
                                        .deleteAll()
                                        .typeString(
                                            '<span style="color:rgb(225, 19, 68); font-size:4em; font-weight:700;">Explore.</span>'
                                        )
                                        .pauseFor(500)
                                        .deleteAll()
                                        .typeString(
                                            '<span style="color:rgb(225, 19, 68); font-size:4em; font-weight:700;">Enjoy.</span>'
                                        )
                                        .pauseFor(500)
                                        .deleteAll()
                                        .start();
                                }}
                            />

                        </div>
                        <p className="text-xl text-justify w-[80%] sm:w-[85%]">
                            Take your career to the next level with industry ready programs, An entire learning ecosystem at your fingertips to make learning fun. Choose from a range of tech programs and make your next big career switch.
                        </p>
                    </div>

                    <img
                        // src="https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=600"
                        src="/src/assets/courses/feature2.jpg"
                        // width={850}
                        // height={850}
                        width={550}
                        height={450}
                        alt="heroImg"
                        className="hover:scale-105 duration-500 rounded-2xl"
                        loading="lazy"
                    />

                </div>
            </section>
            <Suspense fallback={<div>Loading...</div>}>
                <Counter />
                <Card />
                <Features />
                <Feedback />
                <AboutUs />
                <Footer />
            </Suspense>
        </>
    );
};

export default Hero;
