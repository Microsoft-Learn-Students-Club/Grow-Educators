/* eslint-disable react/prop-types */
import { useState } from 'react';
import edu from '../../assets/courses/edu.jpg';

const CourseModal = ({ title, details, closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-20">
            <div className="bg-blue-300 rounded-lg p-8 flex flex-col items-center justify-center mx-8 w-[50%]">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">{title}</h2>
                <div className="flex justify-center flex-wrap">
                    <img src={edu} alt="edu" className="text-center w-[200px] sm:w-[285px] sm:h-[200px] rounded-2xl" />
                </div>
                <ul className="flex flex-wrap justify-center items-center gap-8">
                    {details.map((detail, index) => (
                        <li key={index} className="my-4 font-semibold">
                            {detail}
                        </li>
                    ))}
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus reiciendis ad quibusdam assumenda suscipit maxime dolore temporibus voluptates nihil, laudantium similique aliquid sequi! Magnam officiis dolorem laboriosam asperiores quae eligendi at sit architecto aliquid error. Blanditiis, eos omnis ipsam assumenda nobis voluptatum. Fugiat vitae sequi eius repellendus beatae tempora!</p>
                <button
                    className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const CourseSection = ({ title, imgAlt, imgSrc, courseDetails }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="bg-blue-300 rounded-3xl border border-gray-300 p-6 w-full mt-11 lg:w-[430px] md:w-[530px] sm:w-[480px] sm:mt-24 flex flex-col justify-between cursor-pointer" onClick={openModal}>
                <h2 className="text-2xl font-bold text-center mb-4 lg:text-3xl md:text-3xl">{title}</h2>
                <div className="flex justify-center flex-wrap">
                    <img src={imgSrc} alt={imgAlt} className="text-center w-[200px] sm:w-[285px] sm:h-[200px] rounded-2xl" />
                </div>
                {courseDetails && (
                    <>
                        <ul className="flex flex-wrap justify-center items-center gap-2 mt-6">
                            {courseDetails.map((detail, index) => (
                                <li key={index} className="font-semibold sm:text-xl pl-4">{detail}</li>
                            ))}
                        </ul>
                        <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia nam est quasi delectus, odit dolorem id velit, porro assumenda et hic, suscipit repellat quam aliquid.</p>
                    </>
                )}
                <button className="w-full bg-yellow-200 text-center rounded-lg py-3 text-lg mt-3">View Courses</button>
            </div>
            {modalOpen && (
                <CourseModal title={title} details={courseDetails} closeModal={closeModal} />
            )}
        </>
    );
};

function Card() {
    return (
        <section>
            <h2 className="text-2xl text-center font-bold relative top-5 sm:text-3xl md:text-4xl lg:text-center">Our Courses</h2>
            <div className="flex my-10 justify-center">
                <div className="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
            <div className="px-4 mb-8 sm:flex flex-wrap justify-center gap-14">
                <CourseSection
                    title="SCHOOL"
                    imgSrc={edu}
                    imgAlt="Grade 5th to 10th"
                    courseDetails={["GRADE 5th TO 10th"]}
                />
                <CourseSection
                    title="SCIENCE"
                    imgSrc={edu}
                    imgAlt="SCIENCE"
                    courseDetails={["XIth", "XIIth", "JEE (MAINS)", "NEET", "MHT-CET(MED & ENGG)"]}
                />
            </div>

            <div className="px-4 mb-24 sm:flex flex-wrap justify-center gap-14">
                <CourseSection
                    title="COMMERCE"
                    imgSrc={edu}
                    imgAlt="COMMERCE"
                    courseDetails={["F.Y.J.C", "S.Y.J.C", "B.COM", "BAF", "CA FOUNDATION"]}
                />
                <CourseSection
                    title="TECH"
                    imgSrc={edu}
                    imgAlt="TECH"
                    courseDetails={["C & C++", "JAVA", "PYTHON", "HTML & CSS"]}
                />
            </div>

            <h2 className="text-2xl font-bold w-full text-center relative bottom-6 top-5 sm:text-3xl lg:text-4xl">{`WHAT'S SPECIAL?`}</h2>
            <div className="flex my-10 justify-center">
                <div className="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>

            <div className="flex justify-center mb-24">
                <div className="w-[80%] sm:h-[900px] md:h-[850px] lg:h-[600px] bg-blue-300 rounded-3xl border border-gray-300 mt-16 mb-6 sm:mb-16 lg:flex justify-center items-center">
                    <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  md:grid-cols-2 lg:gap-16">
                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4 m-auto flex justify-center items-center">
                                <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-700" />Daily live Interactive classes
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4  m-auto  flex justify-center items-center">
                                <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-700" />Personalized study tools
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4 m-auto flex justify-center items-center">
                                <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-700" />Weekly self study plan
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4  m-auto flex justify-center items-center">
                                <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-700" />Score Improvement strategy
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4  m-auto flex justify-center items-center">
                                <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-700" />Timely syllabus completion
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[170px] h-[170px] overflow-hidden bg-custom mt-4  m-auto flex justify-center items-center">
                                <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] my-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-700" />Tech Base Teaching
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;
