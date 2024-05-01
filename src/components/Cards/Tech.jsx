import edu from '../../assets/courses/jee.webp';
import liveImg from '../../assets/courses/live_intractive.webp';
import personalizedImg from '../../assets/courses/personalised_study_tool.webp';
import scoreImg from '../../assets/courses/score_improvement_strategy.webp';
import weekImg from '../../assets/courses/weekly_self_study_plan.webp';
import Footer from '../Footers/Footer.jsx';


const Tech = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex flex-col sm:flex-row-reverse items-center justify-center px-6 py-12 lg:px-48 lg:pt-28 lg:pb-20">
        <div className="flex justify-center lg:w-1/2">
          <img src={edu} alt="science" className="h-[280px] sm:w-[300px] sm:h-[260px]" />
        </div>
        <div className="flex flex-col lg:w-1/2">
          <h2 className="text-blue-950 text-3xl lg:text-4xl font-semibold leading-relaxed">Tech</h2>
          <p className=" text-justify lg:text-lg">Our program focuses on Programming languages like C and C++, Java, Python, and HTML and CSS each have unique strengths: C & C++ for efficiency, Java for platform independence, Python for versatility, and HTML & CSS for web development.</p>
        </div>
      </div>
      <div className='flex flex-col justify-center'>
        <h2 className="text-lg w-[70%] mx-auto lg:text-3xl font-semibold text-center lg:pl-40 text-red-600">{`What's special about our TECH Programs?`}</h2>
        <div className="flex justify-center mb-24">
          <div className="w-[80%] lg:px-12 py-6 sm:h-[750px] md:h-[800px] lg:h-[350px] bg-blue-950 rounded-3xl mt-6 mb-6 lg:flex justify-center items-center text-white">
            <div className="grid justify-center gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

              <div className="grid justify-center">
                <div className="w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] overflow-hidden bg-custom mt-4 m-auto flex justify-center items-center">
                  <img src={liveImg} alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                </div>
                <h2 className="text-[16px] text-sm lg:text-lg">
                  <i className="fas fa-check-circle mr-2 text-green-500" />Daily live Interactive classes
                </h2>
              </div>

              <div className="grid justify-center">
                <div className="w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] overflow-hidden bg-custom mt-4 m-auto flex justify-center items-center">
                  <img src={personalizedImg} alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                </div>
                <h2 className="text-[16px] text-sm lg:text-lg">
                  <i className="fas fa-check-circle mr-2 text-green-500" />Personalized study tools
                </h2>
              </div>

              <div className="grid justify-center">
                <div className="w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] overflow-hidden bg-custom mt-4 m-auto flex justify-center items-center">
                  <img src={weekImg} alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                </div>
                <h2 className="text-[16px] text-sm lg:text-lg">
                  <i className="fas fa-check-circle mr-2 text-green-500" />Weekly self study plan
                </h2>
              </div>

              <div className="grid justify-center">
                <div className="w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] overflow-hidden bg-custom mt-4 m-auto flex justify-center items-center">
                  <img src={scoreImg} alt="Personalized Study Tools" className="min-w-full min-h-full object-cover" />
                </div>
                <h2 className="text-[16px] text-sm lg:text-lg">
                  <i className="fas fa-check-circle mr-2 text-green-500" />Score Improvement strategy
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
export default Tech