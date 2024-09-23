import { Link } from "react-router-dom";
import { Button, MegaMenu, Navbar } from 'flowbite-react';
import { FaCartShopping } from "react-icons/fa6";

const Option1 = () => {
    return (
        <MegaMenu id="megaNavbar">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between space-x-8 p-4 lg:space-x-36 xl:space-x-48 2xl:max-w-7xl 2xl:space-x-64">
                <Navbar.Brand>
                    <Link to="/" className="flex flex-row">
                        <img src="/Icon-PC-Amazing.ico" className="mr-1 h-16" alt="logo" />
                        <h1 className="self-center whitespace-nowrap text-2xl">
                            <span className="text-teal-500">PC</span><span className="text-blue-800"> Amazing</span>
                        </h1>
                    </Link>
                </Navbar.Brand>
                <div id="itemsNav" className="order-2 flex items-center">
                    <Link to="#" className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800" >
                        <Button className="rounded-full bg-teal-500 hover:bg-blue-800">
                            <h1 className="me-2">ORDER NOW</h1>
                            <FaCartShopping className="h-full text-white" />
                        </Button>
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
                            <div className="text">Shop</div>
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
                            <div className="text">Team</div>
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
    );
}

export default Option1;
