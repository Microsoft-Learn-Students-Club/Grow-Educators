import  { useState, useEffect } from 'react';
import Images from "./OurTeam.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 640) { 
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else { 
                setSlidesToShow(3);
            }
        };
    
        updateSlidesToShow();

        window.addEventListener('resize', updateSlidesToShow);

        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <Slider {...settings}>
            {Images.map((item) => (
                <div key={item.id} className="bg-blue-950 rounded-3xl">
                    <img src={item.imgs} alt={item.name} className="h-[6rem] w-[6rem] rounded-full relative top-16 left-[50%] transform -translate-x-1/2 border-2 border-black" />
                    <div className="flex flex-col items-center justify-center rounded-b-3xl bg-white h-full w-full mt-8">
                        <h2 className="text-lg font-semibold mt-12">{item.name}</h2>
                        <i className="description text-sm">{item.qualification}</i>
                        <p className="description text-sm pb-6">Teaching Experience <span className="font-bold">{item.experience}</span></p>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default OurTeam;
