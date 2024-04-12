import Ourteam from "./OurTeam";
import SuccessStories from "./SuccessStories";
import Header from "./Header";
function AboutUs() {
    return (
        <>
            <section className=' px-10 pt-5'>
                <Header />
                <h1 className="text-center font-semibold text-4xl my-5 pt-12">Our Experienced Teachers</h1>
                <div className="flex my-6 justify-center">
                    <div className="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
                <Ourteam />
                <h1 className="text-center font-semibold text-4xl my-5 pt-12">Success Stories</h1>
                <div className="flex my-6 justify-center">
                    <div className="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
                <SuccessStories />
            </section>
        </>
    )
}

export default AboutUs;