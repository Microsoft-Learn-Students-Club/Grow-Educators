import { useEffect, useState, useRef } from 'react';

const Counter = () => {
    const [counters, setCounters] = useState([
        { target: 6, current: 0, text: 'Years of Excellence' },
        { target: 1500, current: 0, text: 'Satisfied Students' },
        { target: 11, current: 0, text: 'Experienced Faculties' },
        { target: 500, current: 0, text: 'Satisfied Parents' }
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
        const speed = 1000;
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
            className="bg-blue-900 text-white py-10 sm:py-20 border-t-4 border-blue-300 mb-24 w-[70%] rounded-3xl mx-auto"
        >
            <div className="container flex flex-col gap-12 sm:flex-row text-center justify-center items-center">
                {counters.map((counter, index) => (
                    <div key={index}>
                        <div className="counter text-3xl font-bold pb-4">
                            {Math.round(counter.current)}
                        </div>
                        <h3 className="font-semibold text-xl">{counter.text}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Counter;
