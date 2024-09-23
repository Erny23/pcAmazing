import { Button, Navbar, Dropdown, DropdownItem } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Option1 = () => {
    return (
        <Navbar id="navbar">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between space-x-8 p-4">
                <Navbar.Brand>
                    <Link to="/" className="flex flex-row">
                        <img src="/Icon-PC-Amazing.ico" className="mr-1 h-16" alt="logo" />
                        <h1 className="self-center whitespace-nowrap text-2xl">
                            <span className="text-teal-500">PC</span>
                            <span className="text-blue-800"> Amazing</span>
                        </h1>
                    </Link>
                </Navbar.Brand>
                <div className="order-2 flex items-center">
                    <Button className="bg-teal-500 text-white hover:bg-blue-800">Sign up</Button>
                </div>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <li>
                        <Link to="/" className="text-gray-600">Home</Link>
                    </li>
                    <Navbar.Link>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className="cursor-pointer">Shop</span>} trigger="hover">
                            <Dropdown.Header>
                                <h2>Dropdown 1</h2>
                            </Dropdown.Header>
                            <Dropdown.Divider />
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
                    </Navbar.Link>
                    <Navbar.Link>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className="cursor-pointer">Team</span>} trigger="hover">
                            <Dropdown.Header>
                                <h2>Dropdown 2</h2>
                            </Dropdown.Header>
                            <Dropdown.Divider />
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
                    </Navbar.Link>
                    <li>
                        <Link to="#" className="text-gray-600">Contact</Link>
                    </li>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Option1
