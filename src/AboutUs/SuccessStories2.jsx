import React, { useState } from 'react';
import image2 from '../assets/image2.jpg';

const cards = [
    { name: 'asdasdas asasd as', bio: 'abcbb dadfasfasda fbafbafjb adfhbafadbfbadbdfhjdgsfhj gasdfhkga sdhfgasdk fhjadsg fhkgsadfhg asdasasasd assdasdasdasdas', img: image2 },
    { name: 'Card 2', bio: 'This is the bio for card 2.', img: image2 },
    { name: 'Card 3', bio: 'This is the bio for card 3.', img: image2 },
    { name: 'Card 4', bio: 'This is the bio for card 4.', img: image2 },
    { name: 'Card 5', bio: 'This is the bio for card 5.', img: image2 },
];

const SuccessStories2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        const nextIndex = currentIndex === cards.length + 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        setTimeout(() => setIsTransitioning(false), 300); // Adjust transition duration as needed
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        const prevIndex = currentIndex === 0 ? cards.length * 2 - 2 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setTimeout(() => setIsTransitioning(false), 300); // Adjust transition duration as needed
    };

    const cardStyle = {
        transform: `translateX(calc(-${currentIndex * (100 / (cards.length + 1))}%))`,
        transition: currentIndex === cards.length * 2 + 1 ? 'none' : 'transform 0.3s ease-in-out', // Apply transition only if not transitioning from last to first
        transition: currentIndex === 0 ? 'none' : 'transform 0.3s ease-in-out', // Apply transition only if not transitioning from last to first
        width: `${(cards.length + 1) * (100 / 1)}%`, // Adjust the width of the container
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className='flex'>
                <div className="flex h-[360px] items-center  font-semibold " style={cardStyle}>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-80 h-80 flex flex-col items-center justify-start text-center p-4  bg-gray-100 rounded-md shadow-md mx-1 drop-shadow-xl"
                            >
                            <div className='flex items-center gap-2 border-2 text-left'>
                            <img className='w-32 h-32 rounded-full' src={card.img} alt="" />
                            <h3 className='w-44 md:w-72 text-xl line-clamp-2'>{card.name}</h3>
                            </div>
                            

                            <p className="line-clamp-5 w-72">{card.bio}</p>   
                        </div>
                    ))}
                </div>
                <div className="flex h-[360px] items-center 0 font-semibold " style={cardStyle}>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-80 h-80 flex flex-col items-center justify-start text-center p-4  bg-gray-100 rounded-md shadow-md mx-1 drop-shadow-xl"
                            >
                            <div className='flex items-center gap-2 border-2 text-left'>
                            <img className='w-32 h-32 rounded-full' src={card.img} alt="" />
                            <h3 className='w-44 md:w-72 text-xl line-clamp-2'>{card.name}</h3>
                            </div>
                            

                            <p className="line-clamp-5 w-72">{card.bio}</p>   
                        </div>
                    ))}
                </div>
            </div>

            <div className=" flex items-center justify-center pb-4">
                <button
                    type="button"
                    className={`border border-red-500 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-gray-200 rounded-full mr-2 ${isTransitioning || currentIndex === 0 ? 'cursor-not-allowed' : ''}`}
                    onClick={handlePrev}
                    disabled={isTransitioning || currentIndex === 0} // Disable if transitioning or at the first index
                >
                    <img className='w-4 h-4 transform rotate-180' src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-arrow-24.png" alt="" />
                </button>

                <button
                    type="button"
                    className="border border-red-500 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-gray-200 rounded-full ml-2"
                    onClick={handleNext}
                    disabled={isTransitioning}
                >
                    <img className='w-4 h-4' src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-arrow-24.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default SuccessStories2;
