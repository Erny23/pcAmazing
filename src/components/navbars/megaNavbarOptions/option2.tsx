import { Link } from "react-router-dom";
import { MegaMenu, Navbar } from 'flowbite-react';
import { FaFacebookF, FaTwitter, FaPinterest, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Option2 = () => {
  return (
    <MegaMenu id="megaNavbar2">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between space-x-8 p-4">
        <Navbar.Brand className="gap-2 divide-x-2 divide-zinc-300">
          <Link to="/" className="me-4 flex flex-row">
            <img src="/Icon-PC-Amazing.ico" className="mr-1 h-16" alt="logo" />
            <h1 className="self-center whitespace-nowrap text-2xl">
              <span className="text-teal-500">PC</span><span className="text-blue-800"> Amazing</span>
            </h1>
          </Link>
          <div className="flex flex-row gap-6 px-4 py-1">
            <FaFacebookF className="icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
            <FaTwitter className="icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
            <FaPinterest className="icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
          </div>
          <div className="px-4 py-1">
            <FaPhoneAlt className="icon ms-2 size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
          </div>
          <div id="locationNav" className="flex cursor-pointer flex-row items-center gap-2 px-4 py-1 text-zinc-700 hover:text-teal-400">
            <FaLocationDot className="icon size-10 rounded-full border-2 border-teal-400 p-2" />
            <div className="text-base leading-4">
              <h1>LOCATE</h1>
              <h1>OUR SHOP</h1>
            </div>
          </div>
        </Navbar.Brand>
        <div id="itemsNav" className="order-2 flex items-center">
          <Link to="#" className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800" >
            <IoSearch className="icon size-10 rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
          </Link>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse id="linksNav">
          <Navbar.Link>
            <Link to="/">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <div id="universeio-tooltip-nav-container">
              <div className="text flex flex-row items-center">Shop <IoIosArrowDown /></div>
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
              <div className="text flex flex-row items-center">Team <IoIosArrowDown /></div>
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
              Contact
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
  )
}

export default Option2
