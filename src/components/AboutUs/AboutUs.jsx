import Ourteam from "./OurTeam";
// import SuccessStories from "./SuccessStories";
import Header from "./Header";
function AboutUs() {
    return (
        <>
            <section className='px-6 lg:px-10 pt-5'>
                <Header />
                <h1 className="text-center font-semibold text-2xl sm:text-4xl my-5 pt-12 text-red-600">Our Experienced Teachers</h1>
                <Ourteam />
                {/* <h1 className="text-center font-semibold text-2xl sm:text-4xl my-5 pt-12 text-red-600">Success Stories</h1> */}
                {/* <SuccessStories /> */}
            </section>
        </>
    )
}

export default AboutUs;