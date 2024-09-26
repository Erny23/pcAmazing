import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Dropdown, DropdownItem } from 'flowbite-react';
import { IoIosArrowDown } from "react-icons/io";
import { GlobalContext } from '../../../context/globalProvider';

const Option1 = () => {

    const { backgroundNav } = React.useContext(GlobalContext);

    return (
        <Navbar id="navbar" className={`${backgroundNav === 0 ? "bg-white" : "bg-transparent"} relative`}>
            <div className={`${backgroundNav === 1 ? "absolute" : "hidden"} inset-0 z-10 blur-sm`}></div>
                <Navbar.Brand>
                    <Link to="/" className="flex flex-row">
                        <img src="/Icon-PC-Amazing.ico" className="mr-1 h-16" alt="logo" />
                        <h1 className="self-center whitespace-nowrap text-2xl">
                            <span className="text-teal-500">PC</span>
                            <span className={`${backgroundNav === 1 ? "text-white" : "text-blue-800"}`}> Amazing</span>
                        </h1>
                    </Link>
                </Navbar.Brand>
                <ul id="linksNav" className="flex flex-row gap-8">
                    <li>
                        <Link to="/" className="text-gray-600">
                            <span className={`${backgroundNav === 0 ? null : "text-white"}`}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => 
                            <div className="text flex flex-row items-center">
                                <span className={`${backgroundNav === 0 ? null : "text-white"}`}>Shop</span>
                                <IoIosArrowDown className={`${backgroundNav === 0 ? null : "text-white"}`} />
                            </div>
                        } trigger="click">
                            <div className="grid grid-cols-3 gap-2">
                                <div>
                                    <DropdownItem>
                                        <Link to="#">
                                            About Us
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Library
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Resources
                                        </Link>
                                    </DropdownItem>
                                </div>
                                <div>
                                    <DropdownItem>
                                        <Link to="#">
                                            Pro Version
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Contact Us
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Support Center
                                        </Link>
                                    </DropdownItem>
                                </div>
                                <div>
                                    <DropdownItem>
                                        <Link to="#">
                                            Terms
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Blog
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Newsletter
                                        </Link>
                                    </DropdownItem>
                                </div>
                            </div>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => 
                            <div className="text flex flex-row items-center">
                                <span className={`${backgroundNav === 0 ? null : "text-white"}`}>Team</span>
                                <IoIosArrowDown className={`${backgroundNav === 0 ? null : "text-white"}`} />
                            </div>
                        } trigger="click">
                            <div className="grid grid-cols-3 gap-2">
                                <div>
                                    <DropdownItem>
                                        <Link to="#">
                                            About Us
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Library
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Resources
                                        </Link>
                                    </DropdownItem>
                                </div>
                                <div>
                                    <DropdownItem>
                                        <Link to="#">
                                            Pro Version
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Contact Us
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Support Center
                                        </Link>
                                    </DropdownItem>
                                </div>
                                <div>
                                    <DropdownItem>
                                        <Link to="#">
                                            Terms
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Blog
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="#">
                                            Newsletter
                                        </Link>
                                    </DropdownItem>
                                </div>
                            </div>
                        </Dropdown>
                    </li>
                    <li>
                        <Link to="#" className="text-gray-600">
                            <span className={`${backgroundNav === 0 ? null : "text-white"}`}>Contact</span>
                        </Link>
                    </li>
                </ul>
        </Navbar>
    )
}

export default Option1
