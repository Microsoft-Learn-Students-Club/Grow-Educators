import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './Success.json'

const SuccessStories2 = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(4);
            }
        };

        updateSlidesToShow();

        window.addEventListener('resize', updateSlidesToShow);

        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };


    return (
        <Slider {...settings}>
            {data.map((data, index) => (
                <div
                    key={index}
                    className="w-full md:w-80 h-80 mb-6 flex items-center p-10 bg-blue-950 text-white rounded-md shadow-md mx-1 drop-shadow-xl transition duration-300 transform hover:scale-105"
                >
                    <div className='flex items-center justify-center gap-2 ml-14'>
                        <img className='w-12 sm:w-16 h-12 sm:h-16 rounded-full border object-cover' src={data.img} alt={data.name} />
                        <h3 className='w-44 md:w-72 text-xl line-clamp-2'>{data.name}</h3>
                    </div>
                    <p className="line-clamp-8 mt-4 md:w-full text-sm sm:text-md text-justify sm:px-8">{data.bio}</p>
                </div>
            ))}
        </Slider>

    );
};

export default SuccessStories2;
