function Features() {

    return (
        <section>
            <div className="flex-col flex sm:flex-row justify-center items-center mt-36">
                <div className="flex justify-center items-center mb-6 rounded-3xl sm:mr-32 w-[200px] h-[200px] marker:sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] lg:w-[650px] lg:h-[400px] overflow-hidden">
                    <img src="/src/assets/courses/feature2.jpg" alt="what sets apart" className="min-w-full min-h-full object-cover" />
                </div>
                <h1 className="font-bold text-center text-xl md:text-2xl lg:text-5xl text-red-600">What sets us apart?</h1>
            </div>

            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-3xl sm:text-5xl text-center title-font mb-8 font-semibold text-red-600">Learning App</h1>
                
                <div className="text-center flex flex-col lg:flex-row-reverse mdcs">
                    <div className="flex flex-col items-center lg:w-4/5 sm:mb-2 -mx-2">
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-blue-950 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white text-xl">Unified Dashboard</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-blue-950 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white text-xl">Video Library of Lecture Recording</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-blue-950 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white text-xl">Regular Exams and Analysis</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-blue-950 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white text-xl">Performance at your Fingertips</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-blue-950 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white text-xl">The Ultimate Online Advantage</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-evenly lg:w-2/3 mx-2 h-96">
                        <div className="rounded-md px-2 w-full sm:w-[80%] h-3/6 my-2 m-auto" style={{ background: 'url("https://clipart-library.com/images/pT5rK4dgc.jpg") center center / cover' }}></div>
                        <div className="rounded-md px-2 w-full sm:w-[80%] h-3/6 my-2 m-auto" style={{ background: 'url("https://clipart-library.com/images/pT5rK4dgc.jpg") center center / cover' }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
