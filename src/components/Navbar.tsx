import { useEffect, useState } from "react";
import { Link,} from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import { solutionsdata } from "../data/solutionsData";
import { loginData } from "../data/loginData";
import CustomPopover from "./CustomPopover";
import { aboutNavData,servicesNavData,solutionsNavData } from "../data/navData";
import CustomPopOverWithForm from "./CustomPopOverWithForm";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);


  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      
      className={
        shadow
          ? "bg-white fixed w-full h-[66px] shadow-xl z-[100] ease-in-out duration-300 border-b border"
          : "bg-white fixed w-full h-[66px] z-[100] border-b "
      }
    >
      <div className="flex font-poppins justify-between items-center h-full w-full  2xl:px-10  mx-auto px-6 2xl:w-[85%]">
        <Link to='/'>
        <div>
          <img className="h-full object-contain py-3" src={logo} alt="" />
        </div>
        </Link>
        <div>
          <ul className="hidden xl:flex items-center">

            <CustomPopover title="Services" data={servicesNavData}  />
            <CustomPopover title="Solutions" data={solutionsNavData}  />
            <CustomPopover title="About" data={aboutNavData}  />
            <CustomPopOverWithForm title="Free Pulse" />
            <CustomPopOverWithForm title="Become A provider" />
          
            <Link
              className="mr-4"
              to="https://sequentialjobs.workplacestars.com/blog"
              
            >
              <li className="navlink">Research</li>
            </Link>
            <CustomPopOverWithForm title="Request Demo" demoButton={true} />
            
            <CustomPopover title="Login" loginButton={true} data={loginData}  />
            
          

          
          </ul>
          <div onClick={handleNav} className="xl:hidden">
          
            <Bars3Icon className="w-5 h-5 xl:hidden" fontSize={23} />
         
          </div>
        </div>
      </div>

      {/* ------------------------------------- MOBILE VIEW -------------------------------------------------------- */}
      <div
        className={
          nav ? "xl:hidden  fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <nav
          className={
            nav
              ? "font-poppins xl:hidden fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[60%]  h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className="font-signature sm:text-2xl md:text-4xl text-primary">
                WorkPlaceStars
              </h1>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
              >
                <XMarkIcon className="w-10 h-10" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 font-light">
              <p className="w-[85%] md:w-[90%] sm:py-2 md:py-4">
                Navigation
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="">
              {/* Services Mobile  */}
           
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md text-black text-base px-3 py-2 font-light hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="capitalize">Services</span>
                      <ChevronDownIcon
                        className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            {servicesNavData.map((item,index) => (
                              <Link
                                key={index}
                               to={item?.url}
                               onClick={() => setNav(false)}
                              //  target={`${item.url ? "_blank" : ""}`}
                                className="border-b -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              >
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900 capitalize">
                                    {item.headerText}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {/* Solutions Mobile */}
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md text-black text-base px-3 py-2 font-light hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="capitalize">Solutions</span>
                      <ChevronDownIcon
                        className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            {solutionsNavData.map((item,index) => (
                              <a
                                key={index}
                                href={item?.url}
                               target={`${item.url ? "_blank" : ""}`}
                                className="border-b -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              >
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900 capitalize">
                                    {item.headerText}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {/* About Mobile  */}
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center font-light rounded-md text-black text-base px-3 py-2  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="capitalize font-light">About</span>
                      <ChevronDownIcon
                        className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            {aboutNavData.map((item,index) => (
                              <Link
                                key={index}
                                to={item.url}
                                onClick={() => setNav(false)}
                               
                                className="border-b -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              >
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900 capitalize">
                                    {item.headerText}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {/*  Free Pulse */}
              <Link to="/">
                <li
                  onClick={() => setNav(false)}
                  // className="py-2 md:py-4 text-sm"
                  className="ml-3 font-light my-1  capitalize text-base"
                >
                  Free Pulse
                </li>
              </Link>
              
              {/* Research */}
              <Link to="https://raredolls.tk/become-provider.html" target="_blank">
                <li
                  onClick={() => setNav(false)}
                  // className="py-2 md:py-4 text-sm"
                  className="ml-3 font-light my-3  capitalize text-base"
                >
                  Research
                </li>
              </Link>
              
              {/* Request Demo */}
              <Link to="/request-demo">
                <li
                  onClick={() => setNav(false)}
                  // className="py-2 md:py-4 text-sm"
                  className="ml-3 font-light my-3  capitalize text-base"
                >
                  Request Demo
                </li>
              </Link>

              {/* Login Mobile */}

              <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button className={` ${open ? "" : "text-opacity-90"} font-light group inline-flex items-center rounded-md text-black text-base px-3 py-2 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                          <span className="capitalize">Login</span>
                          <ChevronDownIcon className={`${open ? "" : "text-opacity-70"} ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}aria-hidden="true"/>
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                              {loginData.map((item) => (
                                <a
                                  key={item.url}
                                  href={item?.url}
                                  target={`${item.url ? "_blank" : ""}`}
                                  className="border-b -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                >
                                  <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900 capitalize">
                                      {item.headerText}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
              </Popover>

              


              
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
