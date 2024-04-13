import { useEffect, useState, useRef } from 'react';
import { FaBusinessTime, FaSmile, FaTrophy } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

const Counter = () => {
    const [counters, setCounters] = useState([
        { symbol: "+", icon: <FaTrophy size={52} color='yellow' />, target: 6, current: 0, text: 'Years of Excellence' },
        { symbol: "+", icon: <FaUsers size={52} color='yellow' />, target: 15000, current: 0, text: 'Satisfied Students' },
        { symbol: "+", icon: <FaBusinessTime size={52} color='yellow' />, target: 28, current: 0, text: 'Experienced Faculties' },
        { symbol: "%", icon: <FaSmile size={52} color='yellow' />, target: 96, current: 0, text: 'Satisfied Parents' }
    ]);

    const countersRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startCounting();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (countersRef.current) {
            observer.observe(countersRef.current);
        }

        return () => {
            if (countersRef.current) {
                observer.unobserve(countersRef.current);
            }
        };
    }, []);

    const startCounting = () => {
        const speed = 500;
        let animationFrame;

        const updateCount = () => {
            setCounters(prevCounters => {
                return prevCounters.map(counter => {
                    const inc = counter.target / speed;
                    if (counter.current < counter.target) {
                        counter.current += inc;
                        return { ...counter };
                    } else {
                        return counter;
                    }
                });
            });

            animationFrame = requestAnimationFrame(updateCount);
        };

        animationFrame = requestAnimationFrame(updateCount);

        return () => cancelAnimationFrame(animationFrame);
    };

    return (
        <section
            ref={countersRef}
            className="bg-blue-950 text-white py-10 sm:py-20 mb-32 w-[90%] rounded-3xl mx-auto"
        >
            <div className="container flex flex-col gap-16 sm:flex-row text-center justify-center items-center">
                {counters.map((counter, index) => (
                    <div key={index} className='flex flex-col items-center justify-center'>
                        {counter.icon}
                        <div className="counter text-4xl font-bold py-4">
                            {Math.round(counter.current)}
                            {counter.symbol}
                        </div>
                        <h3 className="font-semibold text-2xl">{counter.text}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Counter;
