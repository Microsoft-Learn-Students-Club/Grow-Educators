/* eslint-disable react/prop-types */
import edu from '../../assets/courses/1st-10th.webp';
import edu2 from '../../assets/courses/jee.webp';
import edu3 from '../../assets/courses/neet.webp'
import edu4 from '../../assets/courses/commerce.webp';


const CourseSection = ({ title, imgAlt, imgSrc, courseDetails, content, redirectTo }) => {

    const redirectToCourses = () => {
        window.location.href = redirectTo;
    };

    return (
        <section>
            <div className='flex flex-col sm:flex-col justify-center items-center'>
                <h2 className="font-bold text-center text-2xl lg:text-3xl md:text-3xl">{title}</h2>
                <div className="bg-blue-950 text-white rounded-3xl p-6 w-full lg:w-[430px] md:w-[530px] sm:w-[480px] sm:mt-2 flex flex-col justify-between gap-4">

                    <div className="flex justify-center flex-wrap">
                        <img src={imgSrc} alt={imgAlt} className="text-center w-[200px] sm:w-[280px] sm:h-[220px] rounded-2xl" />
                    </div>
                    {courseDetails && (
                        <>
                            <ul className="flex flex-wrap justify-center items-center gap-2">
                                {courseDetails.map((detail, index) => (
                                    <li key={index} className="font-semibold sm:text-xl pl-4">{detail}</li>
                                ))}
                            </ul>
                            <p className="text-sm mt-3 text-justify">{content}</p>
                        </>
                    )}
                    <button className="w-full bg-yellow-300 text-center rounded-lg py-3 text-lg mt-3 cursor-pointer text-black hover:bg-yellow-200" onClick={redirectToCourses}>View Courses</button>
                </div>
            </div>
        </section>
    );
};

function Card() {
    return (
        <section className='mt-10'>
            <h2 className="text-3xl text-center font-bold md:text-5xl lg:text-center text-red-600">Our Courses</h2>
            <div className='sm:flex flex-wrap justify-center gap-28'>
                <div className="px-4 mt-6">
                    <CourseSection
                        title="SCHOOL"
                        imgSrc={edu}
                        imgAlt="Grade 5th to 10th"
                        courseDetails={["GRADE 5th to 10th"]}
                        content="Our program encompasses studies on Grades 5th to 10th which ensure success in school exams, and other competitive tests. We nurture fundamentals and scientific thinking, equipping students for a competitive edge and a promising future."
                        redirectTo="/school"
                    />

                </div>

                <div className="px-4 mt-14 sm:mt-6">
                    <CourseSection
                        title="SCIENCE"
                        imgSrc={edu3}
                        imgAlt="SCIENCE"
                        courseDetails={["11th", "12th", "JEE(MAINS)", "NEET", "MHT-CET(MED & ENGG.)"]}
                        content="Our program encompasses studies on Grades 11th and 12th also ensures preparation for competitive exams such as NEET, JEE, and MHT-CET(MED. & ENGG.)"
                        redirectTo="/science"
                    />
                </div>

                <div className="px-4 mb-14 sm:mb-24 mt-14 sm:mt-0">
                    <CourseSection
                        title="COMMERCE"
                        imgSrc={edu4}
                        imgAlt="COMMERCE"
                        courseDetails={["F.Y.J.C", "S.Y.J.C", "B.COM", "BAF", "CA FOUNDATION"]}
                        content="Our program encompasses studies in accounting, economics, & business during F.Y.J.C & S.Y.J.C, followed by specialized tracks such as B.Com or BAF for deeper knowledge. Aspiring chartered accountants prepare for the CA Foundation exam as a gateway to the CA qualification."
                        redirectTo="/commerce"
                    />

                </div>

                <div className="px-4 mb-24">
                    <CourseSection
                        title="TECH"
                        imgSrc={edu2}
                        imgAlt="TECH"
                        courseDetails={["C & C++", "JAVA", "PYTHON", "HTML & CSS"]}
                        content="Our program focuses on Programming languages like C and C++, Java, Python, and HTML and CSS each have unique strengths: C & C++ for efficiency, Java for platform independence, Python for versatility, and HTML & CSS for web development."
                        redirectTo="/tech"
                    />
                </div>
            </div>


            <h2 className="text-3xl font-bold w-full text-center lg:text-5xl text-red-600">{`What's special?`}</h2>

            <div className="flex justify-center mb-24">
                <div className="w-[80%] sm:h-[750px] md:h-[800px] lg:h-[600px] bg-blue-950 rounded-3xl mt-8 sm:mt-16 mb-6 sm:mb-16 lg:flex justify-center items-center text-white">
                    <div className="grid justify-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 lg:gap-16">
                        <div className="grid justify-center">
                            <div className="rounded-full w-[110px] h-[110px] sm:w-[170px] sm:h-[170px] overflow-hidden bg-custom mt-4 m-auto flex justify-center items-center">
                                <img src="https://i.imgur.com/NIickO3.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] text-sm mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Daily live Interactive classes
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[110px] h-[110px] sm:w-[170px] sm:h-[170px] overflow-hidden bg-custom mt-4  m-auto  flex justify-center items-center">
                                <img src="https://i.imgur.com/QSwVmig.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] text-sm mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Personalized study tools
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[110px] h-[110px] sm:w-[170px] sm:h-[170px] overflow-hidden bg-custom mt-4 m-auto flex justify-center items-center">
                                <img src="https://i.imgur.com/2h7IoOC.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] text-sm mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Weekly self study plan
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[110px] h-[110px] sm:w-[170px] sm:h-[170px] overflow-hidden bg-custom mt-4  m-auto flex justify-center items-center">
                                <img src="https://i.imgur.com/NlyJ8Nw.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] text-sm mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Score Improvement strategy
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[110px] h-[110px] sm:w-[170px] sm:h-[170px] overflow-hidden bg-custom mt-4  m-auto flex justify-center items-center">
                                <img src="https://i.imgur.com/2h7IoOC.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] text-sm mt-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Timely syllabus completion
                            </h2>
                        </div>

                        <div className="grid justify-center">
                            <div className="rounded-full w-[110px] h-[110px] sm:w-[170px] sm:h-[170px] overflow-hidden bg-custom mt-4  m-auto flex justify-center items-center">
                                <img src="https://i.imgur.com/QSwVmig.jpeg" alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                            </div>
                            <h2 className="text-[16px] text-sm my-4 font-bold lg:text-xl">
                                <i className="fas fa-check-circle mr-2 text-green-500" />Tech Base Teaching
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;
