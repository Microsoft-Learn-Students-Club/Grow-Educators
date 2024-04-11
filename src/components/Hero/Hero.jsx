import { lazy, Suspense } from "react";
import "../../../src/index.css";
const Typewriter = lazy(() => import("typewriter-effect"));
const Feedback = lazy(() => import("../Feedback/Feedback"));
const Card = lazy(() => import("../Cards/Card"));
const Features = lazy(() => import("../Features/Features"));
const AboutUs = lazy(() => import("../AboutUs/AboutUs"));
const Footer = lazy(() => import('../Footers/Footerss'));
const Counter = lazy(() => import("../Counter/Counter"));

const Hero = () => {
    return (
        <>
            <section className="h-full rounded-bl-[100q] md:h-[85vh] bg-fixed md:pb-0 pb-4 px-4 sm:px-24">
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-0 gap-8 pt-12 mt-0 sm:mt-24 sm:pt-26">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="min-h-[96px] pl-4 md:pl-0">
                            <Suspense fallback={<div className="font-semibold text-xl">Loading...</div>}>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        cursor: '<span class="text-primary-navy font-extralight text-5xl mb-8" style="visibility:hidden">|</span>',
                                        deleteSpeed: "natural",
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(
                                                '<span style="color: #D47C42; font-size:4em; font-weight:700;">Learn.</span>'
                                            )
                                            .pauseFor(500)
                                            .deleteAll()
                                            .typeString(
                                                '<span style="color: #D47C42; font-size:4em; font-weight:700;">Educate.</span>'
                                            )
                                            .pauseFor(500)
                                            .deleteAll()
                                            .typeString(
                                                '<span style="color:#D47C42; font-size:4em; font-weight:700;">Explore.</span>'
                                            )
                                            .pauseFor(500)
                                            .deleteAll()
                                            .typeString(
                                                '<span style="color: #D47C42; font-size:4em; font-weight:700;">Enjoy.</span>'
                                            )
                                            .pauseFor(500)
                                            .deleteAll()
                                            .start();
                                    }}
                                />
                            </Suspense>
                        </div>
                        <p className="text-xl font-semibold text-justify w-[80%] sm:w-[70%]">
                            A comprehensive resource for connecting you with the ideal attorney to address all your Educational requirements, we recognize that selecting the right Teacher can be an overwhelming and daunting task and this is precisely where we step in to alleviate the burden.
                        </p>
                    </div>

                    <img
                        src="https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=600"
                        width={850}
                        height={850}
                        alt="heroImg"
                        className="hover:scale-105 duration-500 rounded-2xl"
                        loading="lazy"
                    />

                </div>
            </section>
            <Suspense fallback={<div>Loading...</div>}>
                <Counter/>
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
