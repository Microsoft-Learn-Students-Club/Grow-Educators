import { lazy, Suspense } from "react";
import "/src/index.css";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroImg from "./HeroImg.json";
const Feedback = lazy(() => import("../Feedback/Feedback"));
const Card = lazy(() => import("../Cards/Card"));
const Features = lazy(() => import("../Features/Features"));
const AboutUs = lazy(() => import("../AboutUs/AboutUs"));
const Footer = lazy(() => import('../Footers/Footer'));
const Counter = lazy(() => import("../Counter/Counter"));

const Hero = () => {
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <section className="h-full md:h-screen md:pb-0 pb-4 px-4 sm:px-24">
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-0 gap-8 pt-12 mt-0 sm:pt-24 sm:pt-26">
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="font-bold text-xl text-center w-[70%] sm:w-full sm:text-left sm:text-3xl sm:leading-3 text-blue-950">Learning with Grow Educators made</h1>
                        <div className="min-h-[96px] relative pl-4 md:pl-0">
                            <div className="absolute top-6 -left-20 sm:left-0 right-0 bottom-0">
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
                                                '<span class="text-5xl md:text-6xl" style="color:rgb(225, 19, 68); font-weight:700;">Intuitive.</span>'
                                            )
                                            .pauseFor(500)
                                            .deleteAll()
                                            .typeString(
                                                '<span class="text-5xl md:text-6xl" style="color:rgb(225, 19, 68); font-weight:700;">Educate.</span>'
                                            )
                                            .pauseFor(500)
                                            .deleteAll()
                                            .typeString(
                                                '<span class="text-5xl md:text-6xl" style="color:rgb(225, 19, 68); font-weight:700;">Explore.</span>'
                                            )
                                            .pauseFor(500)
                                            .deleteAll()
                                            .typeString(
                                                '<span class="text-5xl md:text-6xl" style="color:rgb(225, 19, 68); font-weight:700;">Enjoy.</span>'
                                            )
                                            .pauseFor(500)
                                            .deleteAll()
                                            .start();
                                    }}
                                />
                            </div>
                        </div>
                        <p className="text-xl text-justify w-[80%] sm:w-[85%]">
                            Take your career to the next level with industry-ready programs, An entire learning ecosystem at your fingertips to make learning fun. Choose from a range of tech programs and make your next big career switch.
                        </p>
                    </div>
                    <div className="h-[280px] w-[90%] lg:h-[450px] lg:w-2/5">
                        <Slider {...settings}>
                            {HeroImg.map((hero) => (
                                <div key={hero.id}>
                                    <img
                                        src={hero.img}
                                        alt={hero.id}
                                        className="h-80 w-90 object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
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
