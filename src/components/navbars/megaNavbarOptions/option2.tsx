import React from "react";
import { Link } from "react-router-dom";
import { MegaMenu, Navbar } from 'flowbite-react';
import { FaFacebookF, FaTwitter, FaPinterest, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GlobalContext } from "../../../context/globalProvider";

const Option2 = () => {

  const { background } = React.useContext(GlobalContext);

  return (
    <MegaMenu id="megaNavbar2" className={`${background === 0 ? "bg-white" : "bg-transparent"} relative`}>
      <div className={`${background === 1 ? "absolute" : "hidden"} inset-0 z-10 blur-sm`}></div>
      <div className="relative z-20 mx-auto flex flex-wrap items-center justify-between space-x-4 p-4 xl:space-x-8 2xl:space-x-20">
        <Navbar.Brand className="gap-2 divide-x-2 divide-zinc-300">
          <Link to="/" className="me-2 flex flex-row 2xl:me-4">
            <img src="/Icon-PC-Amazing.ico" className="mr-1 h-14 xl:h-16" alt="logo" />
            <h1 className="self-center whitespace-nowrap text-xl xl:text-2xl">
              <span className="text-teal-500">PC</span><span className="text-blue-800"> Amazing</span>
            </h1>
          </Link>
          <div className="flex flex-row gap-2 py-1 ps-1.5 xl:gap-4 xl:pe-2 xl:ps-3 2xl:pe-4 2xl:ps-5">
            <FaFacebookF className="icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
            <FaTwitter className="icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
            <FaPinterest className="icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
          </div>
          <div className="p-1 2xl:px-3">
            <FaPhoneAlt className="icon ms-2 size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
          </div>
          <div id="locationNav" className="flex cursor-pointer flex-row items-center gap-2 px-2 py-1 text-zinc-700 hover:text-teal-400 xl:px-4">
            <FaLocationDot className="icon size-10 rounded-full border-2 border-teal-400 p-2" />
            <div className="text-base leading-4">
              <h1>LOCATE</h1>
              <h1>OUR SHOP</h1>
            </div>
          </div>
        </Navbar.Brand>
        <div id="itemsNav" className="order-2 flex items-center">
          <Link to="#" className="mr-1 rounded-lg px-0 py-2 text-sm font-medium text-gray-800 xl:px-4" >
            <IoSearch className="icon size-10 rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
          </Link>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse id="linksNav">
          <Navbar.Link>
            <Link to="/">
              <span className={`${background === 0 ? null : "text-white"}`}>Home</span>
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <div id="universeio-tooltip-nav-container">
              <div className="text flex flex-row items-center">
                <span className={`${background === 0 ? null : "text-white"}`}>Shop</span>
                <IoIosArrowDown className={`${background === 0 ? null : "text-white"}`} />
              </div>
              <div className="tooltip grid w-[40rem] grid-cols-3 gap-2 px-5 py-3">
                <ul>
                  <li>
                    <Link to="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Resources
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="#">
                      Pro Version
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Support Center
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="#">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Navbar.Link>
          <Navbar.Link>
            <div id="universeio-tooltip-nav-container">
              <div className="text flex flex-row items-center">
                <span className={`${background === 0 ? null : "text-white"}`}>Team</span>
                <IoIosArrowDown className={`${background === 0 ? null : "text-white"}`} />
              </div>
              <div className="tooltip grid w-[50rem] grid-cols-4 gap-2 px-5 py-3">
                <ul className="mt-4">
                  <li>
                    <Link to="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Resources
                    </Link>
                  </li>
                </ul>
                <ul className="mt-4">
                  <li>
                    <Link to="#">
                      Pro Version
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Support Center
                    </Link>
                  </li>
                </ul>
                <ul className="mt-4">
                  <li>
                    <Link to="#">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Newsletter
                    </Link>
                  </li>
                </ul>
                <div className="py-3">
                  <img className="rounded-lg" src="/img-navbar-tooltip.jpg" />
                </div>
              </div>
            </div>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="#">
              <span className={`${background === 0 ? null : "text-white"}`}>Contact</span>
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
  )
}

export default Option2
