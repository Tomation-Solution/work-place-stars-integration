import { useEffect, useState } from "react";
import { Link,} from "react-router-dom";
import {} from "@heroicons/react/24/solid";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { solutionsdata } from "../data/solutionsData";
<<<<<<< HEAD
import { loginData } from "../data/solutionsCardData";
=======
import { loginData } from "../data/loginData";
>>>>>>> master

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
      <div className="flex font-poppins justify-between items-center h-full w-full  2xl:px-10  mx-auto px-6">
        <div>
          <img className="h-full object-contain py-3" src={logo} alt="" />
        </div>
        <div>
          <ul className="hidden xl:flex items-center">
            {/* Services Popover */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-mdpx-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <li className="navlink flex items-center">Services</li>
                    <ChevronDownIcon
                      className={`${open ? "" : "text-opacity-70"}
                  ml-[2px] h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[420px] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xs">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-4">
                          {[
                            "Performance Management ",
                            "Process Improvement and Automation",
                            "Corporate Strategy",
                          ].map((item) => (
                            <a
                              key={item}
                              // href={item}
                              className=" hover:cursor-pointer -m-3 border-b flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className="ml-4">
                                {/* <p className="text-base font-medium text-[#415373]">
                            {item}
                          </p> */}
                                <p className="text-sm text-gray-500 font-[500]">
                                  {item}
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

            {/* Solutions Popover */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-mdpx-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <li className="navlink flex items-center">Solutions </li>
                    <ChevronDownIcon
                      className={`${open ? "" : "text-opacity-70"}
                ml-[2px] h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-sm">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-5">
                          {solutionsdata.map((item) => (
                            <a
                              key={item.headerText}
                              href={item.url}
                              className=" -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-[#415373]">
                                  {item.headerText}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.aboutHeaderText}
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

            {/* About Popover */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-mdpx-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <li className="navlink flex items-center">About</li>
                    <ChevronDownIcon
                      className={`${open ? "" : "text-opacity-70"}
                  ml-1 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[420px] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-4">
                          {[
                            "Our Team",
                            "Our Client & Testimonials",
                            "Our Value Proposition, Our Mission & Vision",
                          ].map((item) => (
                            <a
                              key={item}
                              // href={item}
                              className=" hover:cursor-pointer -m-3 border-b flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className="ml-4">
                                {/* <p className="text-base font-medium text-[#415373]">
                            {item}
                          </p> */}
                                <p className="text-sm text-gray-500 font-[500]">
                                  {item}
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

            <Link to="/">
              <li className="navlink">Free Pulse</li>
            </Link>
            <Link to="/#contact">
              <li className="navlink">Become a Provider</li>
            </Link>
            <Link
              className="mr-8"
              to="https://raredolls.tk/become-provider.html"
              target="_blank"
            >
              <li className="navlink">Research</li>
            </Link>
            {/* Request Demo Popover */}
            <Popover className="relative mx-2">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                      ${open ? "" : "text-opacity-90"}
                      w-[150px]  text-primary border bg-white  border-primary  px-3 py-[6px] rounded-md group inline-flex items-center  text-[15px] font-normal  hover:text-opacity-100 `}
                  >
                    <li className="text-center  w-full h-full border-b-primary">
                      Request Demo{" "}
                    </li>
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[400px] max-w-xl -translate-x-2/3 transform px-4 sm:px-0 lg:max-w-xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-4">
                          {/* Form section for big screens */}
                          <div className="hidden lg:grid font-normal">
                            {/* This form will only be displayed on screens with a width of 1024px or larger */}
                            <form className="mt-4">
                              <div className="mb-4">
                                <label
                                  htmlFor="name"
                                  className="block text-sm font-normal text-gray-700"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                  // Add your name input handling logic here
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="phone"
                                  className="block text-sm font-normal text-gray-700"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                  // Add your phone number input handling logic here
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="company"
                                  className="block text-sm font-normal text-gray-700"
                                >
                                  Company
                                </label>
                                <input
                                  type="text"
                                  id="company"
                                  name="company"
                                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                  // Add your company input handling logic here
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="solution"
                                  className="block text-sm font-normal text-gray-700"
                                >
                                  Solution
                                </label>
                                <select
                                  id="solution"
                                  name="solution"
                                  className="mt-1 p-2 border border-gray-300 rounded-md w-full text-sm"
                                  // Add your solution dropdown handling logic here
                                >
                                  <option value="Org360">Org360</option>
                                  <option value="E-metric Suite">
                                    E-metric Suite
                                  </option>
                                  <option value="Sequential Jobs">
                                    Sequential Jobs
                                  </option>
                                </select>
                              </div>
                              <div className="mt-4">
                                <button
                                  type="submit"
                                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                                  // Add your form submission logic here
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* Login Popover */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                    ${open ? "" : "text-opacity-90"}
                    w-[130px]  text-white border bg-primary  px-3 py-[6px] rounded-md group inline-flex items-center  text-[15px] font-normal  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <li className="text-center  w-full h-full">Login </li>
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[250px] max-w-xl -translate-x-2/3 transform px-2 sm:px-0 lg:max-w-xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-4 bg-opacity-[0.93] ">
                          {loginData.map((item) => (
                            <a
                              key={item.headerText}
                              target="_blank"
                              href={item.url}
                              className=" -m-3 flex items-center p-2 rounded-lg  transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className="ml-4">
                                <p className="text-sm font-medium text-[#415373]">
                                  {item.headerText}
                                </p>
                                {/* <p className="text-sm text-gray-500">
                                {item.aboutHeaderText}
                              </p> */}
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
          <div onClick={handleNav} className="xl:hidden">
            {/* <AiOutlineClose /> */}
            <Bars3Icon className="w-5 h-5" fontSize={23} />
            {/* <AiOutlineMenu size={25} /> */}
          </div>
        </div>
      </div>

      {/* ------------------------------------- MOBILE VIEW -------------------------------------------------------- */}
      <div
        className={
          nav ? "xl:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <nav
          className={
            nav
              ? "font-poppins md:hidden fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
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
                            {[
                              "Performance Management ",
                              "Process Improvement and Automation",
                              "Corporate Strategy",
                            ].map((item) => (
                              <a
                                key={item}
                                className="border-b -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              >
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900 capitalize">
                                    {item}
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
                            {solutionsdata.map((item) => (
                              <a
                                key={item.url}
                                href={item.url}
                                target="_blank"
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
                            {[
                              "Our Team",
                              "Our Client & Testimonials",
                              "Our Value Proposition, Our Mission & Vision",
                            ].map((item) => (
                              <a
                                key={item}
                                className="border-b -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              >
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900 capitalize">
                                    {item}
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
                                  href={item.url}
                                  target="_blank"
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
