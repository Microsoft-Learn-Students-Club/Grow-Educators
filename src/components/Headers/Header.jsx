import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logos/groww-educator-logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-blue-950 border-gray-200 backdrop-filter backdrop-blur-sm px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-8 sm:h-12"
                                alt="Logo"
                            />
                            <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-white">{`Grow Educators`}</span>
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:flex w-full lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    activeclassname="text-orange-700"
                                    className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/courses"
                                    activeclassname="text-orange-700"
                                    className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0"
                                >
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/aboutus"
                                    activeclassname="text-orange-700"
                                    className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/feedback"
                                    activeclassname="text-orange-700"
                                    className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0"
                                >
                                    Feedback
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
