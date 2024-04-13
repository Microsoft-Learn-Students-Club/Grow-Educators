import { BsGithub, BsInstagram, BsLinkedin, BsPhone } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const Footerss = () => {
  return (
    <footer className="mb-5 sm:mb-10 px-16 py-4 mt-8 flex flex-col gap-4 justify-between items-center bg-blue-950 text-white">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 lg:gap-32">

        <div className="flex flex-col justify-center items-center gap-4">
          <img src="https://i.imgur.com/JQXUMYM.png" className="lg:h-[8rem]" />
          <p className="text-xl sm:text-2xl font-semibold">Grow Educators</p>
        </div>

        <div className="flex flex-col items-start gap-1">
          <div className="flex justify-center items-center gap-1">
            <BsPhone />
            <p className="text-sm sm:text-xl"> For Enquires:</p>
          </div>

          <p className="text-sm sm:text-lg">Sachin Yadav: +91 7506486342</p>

          <div className="flex justify-center items-center gap-1">
            <GoMail />
            <a href="" className="text-sm sm:text-lg">Email: groweducators@gmail.com</a>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-6 text-2xl sm:mt-2">
            <a href="https://www.linkedin.com/in/" className="hover:text-red-500">
              <BsLinkedin />
            </a>
            <a href="https://github.com/" className="hover:text-red-500">
              <BsGithub />
            </a>
            <a href="https://www.instagram.com/" className="hover:text-red-500">
              <BsInstagram />
            </a>
          </div>
        </div>



        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.618757573729!2d72.87621467498101!3d19.211846982020884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d37a37763f%3A0x18c4d2d8e8ffd074!2sGROW%20EDUCATOR&#39;S!5e0!3m2!1sen!2sin!4v1713009191367!5m2!1sen!2sin"
          width="600"
          height="300"
          style={{ borderRadius: "6px" }}
          loading="lazy"
        ></iframe>

      </div>
      <small className="mb-2 text-sm">&copy; 2024 Grow Educators. All rights reserved.</small>
    </footer>
  )
}

export default Footerss;