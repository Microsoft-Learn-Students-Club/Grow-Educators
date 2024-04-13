import { useState, useEffect } from "react";
import img from '../../assets/Images/sachin.jpg';

const Header2 = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        image.src = img;
        image.onload = () => {
            setIsLoading(false);
        };
        image.onerror = () => {
            setIsLoading(false);
            console.error("Failed to load image");
        };
    }, []);

    return (
        <section>
            <h1 className="font-semibold text-center text-2xl my-4 sm:text-5xl sm:w-full text-blue-950">
                Know About
                <span className="text-red-600 ml-2">{`"Grow Educators"`}</span>
            </h1>
            <div className="bg-blue-950 rounded-3xl border border-gray-300 py-2 px-4">
                <div className="flex flex-col-reverse lg:flex-row lg:gap-20 items-center mx-5 justify-center py-6">
                    <div className="lg:w-3/4 text-center">
                        <h2 className="text-xl mt-4 mb-10 font-semibold sm:text-4xl sm:w-[60%] m-auto text-white">
                            {`Hey there, I'm Sachin Yadav. Founder of `}<span className="font-bold text-red-600">{`"Grow Educators"`}</span>
                        </h2>
                        <p className="text-sm md:text-xl mb-5 text-justify text-white">
                            {`At "Grow Educators", we focus on building a strong foundation of knowledge and concept in students for their success, providing an excellent platform for the preparation of competitive exams and board-level education.
                            We provide the best academic support and personal care which helps them meet their career goals and objectives.
                            To the parents, we have a responsibility to nurture ethical and responsible leadership in the children.`}
                        </p>
                    </div>
                    <div className="w-52 lg:w-1/4 text-center flex flex-col rounded-xl overflow-hidden">
                        {!isLoading ? (
                            <>
                                <img className="w-full mx-auto" src={img} alt="about us" />
                                <p className="p-1 pt-2 bg-blue-900 text-white">BE (Comps ENG)</p>
                            </>
                        ) : (
                            <div className="text-white">Loading...</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header2;
