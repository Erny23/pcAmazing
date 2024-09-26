import React from 'react';
import { Link } from 'react-router-dom';
import { MegaMenu, Navbar } from 'flowbite-react';
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { GlobalContext } from '../../../context/globalProvider';

const Option3 = () => {

  const { backgroundNav } = React.useContext(GlobalContext);

  return (
    <div className={`${backgroundNav === 0 ? "bg-white" : "bg-transparent"} relative`}>
      <div className={`${backgroundNav === 1 ? "absolute" : "hidden"} inset-0 z-10 blur-sm`}></div>
      <MegaMenu id="megaNavbar3" className="container relative z-20 mx-auto bg-transparent px-4">
        <Navbar.Collapse>
          <Navbar.Link>
            <FaFacebookF className={`${backgroundNav === 1 ? "text-white" : "text-zinc-700 hover:text-white"} icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 hover:bg-teal-400`} />
          </Navbar.Link>
          <Navbar.Link>
            <FaTwitter className={`${backgroundNav === 1 ? "text-white" : "text-zinc-700 hover:text-white"} icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 hover:bg-teal-400`} />
          </Navbar.Link>
          <Navbar.Link>
            <FaPinterest className={`${backgroundNav === 1 ? "text-white" : "text-zinc-700 hover:text-white"} icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 hover:bg-teal-400`} />
          </Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Brand className="gap-2 divide-x-2 divide-zinc-300">
          <Link to="/" className="me-4 flex flex-row">
            <img src="/Icon-PC-Amazing.ico" className="mr-1 h-16" alt="logo" />
            <h1 className="self-center whitespace-nowrap text-2xl">
              <span className="text-teal-500">PC</span><span className={`${backgroundNav === 1 ? "text-white" : "text-blue-800"}`}> Amazing</span>
            </h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className="invisible">
            <FaCartShopping className="size-6" />
          </Navbar.Link>
          <Navbar.Link className="relative">
            <FaCartShopping className={`${backgroundNav === 1 ? "size-6 text-white" : "size-6"} relative cursor-pointer`} />
            <div className={`${backgroundNav === 1 ? "icon absolute hover:bg-white/20" : "hidden"} -left-2 -top-2 bottom-0 right-0 rounded-full p-5`}></div>
          </Navbar.Link>
          <Navbar.Link className="relative">
            <MdOutlineMenu className={`${backgroundNav === 1 ? "size-6 text-white" : "size-6"} relative cursor-pointer`} />
            <div className={`${backgroundNav === 1 ? "icon absolute hover:bg-white/20" : "hidden"} -left-2 -top-2 bottom-0 right-0 rounded-full p-5`}></div>
          </Navbar.Link>
        </Navbar.Collapse>
      </MegaMenu>
    </div>
  )
}

export default Option3
