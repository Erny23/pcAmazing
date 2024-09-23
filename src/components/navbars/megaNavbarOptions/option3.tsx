import { Link } from 'react-router-dom';
import { MegaMenu, Navbar } from 'flowbite-react';
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";

const Option3 = () => {
  return (
    <div className="bg-white">
      <MegaMenu id="megaNavbar3" className="container mx-auto bg-transparent px-4">
        <Navbar.Collapse>
          <Navbar.Link>
            <FaFacebookF className="icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
          </Navbar.Link>
          <Navbar.Link>
            <FaTwitter className="icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
          </Navbar.Link>
          <Navbar.Link>
            <FaPinterest className="icon size-10 cursor-pointer rounded-full border-2 border-teal-400 p-2 text-zinc-700 hover:bg-teal-400 hover:text-white" />
          </Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Brand className="gap-2 divide-x-2 divide-zinc-300">
          <Link to="/" className="me-4 flex flex-row">
            <img src="/Icon-PC-Amazing.ico" className="mr-1 h-16" alt="logo" />
            <h1 className="self-center whitespace-nowrap text-2xl">
              <span className="text-teal-500">PC</span><span className="text-blue-800"> Amazing</span>
            </h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className="invisible">
            <FaCartShopping className="size-6" />
          </Navbar.Link>
          <Navbar.Link>
            <FaCartShopping className="size-6 cursor-pointer" />
          </Navbar.Link>
          <Navbar.Link>
            <MdOutlineMenu className="size-6 cursor-pointer" />
          </Navbar.Link>
        </Navbar.Collapse>
      </MegaMenu>
    </div>
  )
}

export default Option3
