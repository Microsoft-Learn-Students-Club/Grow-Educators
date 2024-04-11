function Features() {

    return (
        <section className=" text-black body-font">
            <div className="flex-col flex sm:flex-row justify-center items-center mt-36">
                <div className="mb-6 rounded-3xl sm:mr-40 w-[200px] h-[200px] bg-pink-100 sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] overflow-hidden flex justify-center items-center">
                    <img src="https://images.pexels.com/photos/3662803/pexels-photo-3662803.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Descriptive Alt Text" className="min-w-full min-h-full object-cover" />
                </div>
                <h1 className="text-xl font-bold text-black-800 text-center sm:text-xl md:text-2xl lg:text-4xl">WHAT SETS US APART?</h1>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <h1 className="sm:text-4xl text-3xl text-center title-font mb-4 font-semibold">Learning App</h1>
                <div className="flex my-6 justify-center">
                    <div className="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>

                <div className="text-center flex flex-col lg:flex-row-reverse mdcs">
                    <div className="flex flex-col items-center lg:w-4/5 sm:mb-2 -mx-2">
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Unified Dashboard</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Video Library of Lecture Recording</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Regular Exams and Analysis</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">Performance at your Fingertips</span>
                            </div>
                        </div>
                        <div className="p-2 w-5/6 md:w-2/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                    className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">The Ultimate Online Advantage</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-evenly lg:w-2/3 mx-2 h-96">

                        <div className="rounded-md px-2 w-full h-3/6 my-2" style={{ background: 'url("https://clipart-library.com/images/pT5rK4dgc.jpg") center center / cover' }}></div>
                        <div className="rounded-md px-2 w-full h-3/6 my-2" style={{ background: 'url("https://clipart-library.com/images/pT5rK4dgc.jpg") center center / cover' }}></div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
