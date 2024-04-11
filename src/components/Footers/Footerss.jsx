import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footerss = () => {
  return (
    <footer className="mb-5 sm:mb-10 px-4 py-6 my-8 flex flex-col-reverse gap-3 sm:flex-row justify-between items-center border-t-2 border-black mx-6">
      <small className="mb-2 text-sm font-bold">&copy; 2024 Groww Educator. All rights reserved.</small>
      <div className="flex justify-center items-center gap-4 text-xl">
        <a href="https://www.linkedin.com/in/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/">
          <BsInstagram />
        </a>
      </div>
    </footer>
  )
}

export default Footerss;