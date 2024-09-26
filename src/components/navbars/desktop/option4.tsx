import { Link } from 'react-router-dom';
import { MegaMenu, Navbar, Label, Select } from 'flowbite-react';
import { FaRegClock } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Option4 = () => {
    return (
        <>
            <MegaMenu id="megaNavbar4" className="bg-transparent">
                <div className="flex w-full justify-center bg-white">
                    <div className="container mx-auto max-w-5xl px-4 pt-5">
                        <div className="flex flex-row justify-between px-8 xl:px-0">
                            <div className="flex flex-row gap-2 text-zinc-400">
                                <FaRegClock className="size-8 h-full" />
                                <div className="mt-1 leading-4">
                                    <h1>WORKINGTIME</h1>
                                    <h3 className="text-sm">Mon-Sun: 8:00 - 18:00</h3>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 text-zinc-400">
                                <MdLocalShipping className="size-9 h-full" />
                                <div className="mt-1 leading-4">
                                    <h1>FREE SHIPPING</h1>
                                    <h3 className="text-sm">On order over $199</h3>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 text-zinc-400">
                                <FaRegMoneyBillAlt className="size-10 h-full" />
                                <div className="mt-1 leading-4">
                                    <h1>BACK MONEY 100%</h1>
                                    <h3 className="text-sm">Within 30 Days after delivery</h3>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 text-zinc-400">
                                <FaPhoneSquareAlt className="size-10 h-full" />
                                <div className="mt-1 leading-4">
                                    <h1>PHONE: +58 999 - 999 99 99</h1>
                                    <h3 className="text-sm">Order Online Now !</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between px-6 py-5 xl:px-0">
                            <Navbar.Brand className="gap-2 divide-x-2 divide-zinc-300">
                                <Link to="/" className="me-4 flex flex-row">
                                    <img src="/Icon-PC-Amazing.ico" className="mr-1 h-16" alt="logo" />
                                    <h1 className="self-center whitespace-nowrap text-2xl">
                                        <span className="text-teal-500">PC</span><span className="text-blue-800"> Amazing</span>
                                    </h1>
                                </Link>
                            </Navbar.Brand>
                            <form className="flex w-1/2 flex-row items-center" action="">
                                <div id="categorySelector">
                                    <div className="mb-2 block">
                                        <Label htmlFor="navOptions" value="" />
                                    </div>
                                    <Select value={0} required>
                                        <option value={0}>All categories</option>
                                    </Select>
                                </div>
                                <label htmlFor="search"></label>
                                <input className="w-4/6 border-4 border-zinc-400" type="text" />
                                <IoSearch className="size-12 cursor-pointer bg-teal-400 p-2 text-white hover:bg-blue-800" />
                            </form>
                            <div id="universeio-tooltip-nav-container">
                                <div className="flex cursor-pointer flex-row items-center gap-2 text-zinc-400">
                                    <FaCartShopping id="shoppingCart" className="size-12 h-full bg-teal-400 p-2 text-white" />
                                    <div className="leading-4">
                                        <h1 className="text-lg">SHOPPING CART</h1>
                                        <h1>2 ITEM(S) - <span className="text-red-600">$365.00</span></h1>
                                    </div>
                                </div>
                                <div className="tooltip w-80 px-5 py-3">
                                    <ul className="mt-4">
                                        <li>
                                            <Link to="#">
                                                Product1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                Product2
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MegaMenu>
            <div id="navLinks4" className="bg-zinc-700">
                <div className="container mx-auto grid max-w-7xl grid-cols-7 justify-start gap-0 divide-x-2 px-4 py-5 text-center text-sm text-white xl:gap-3 xl:text-base">
                    <div>Home</div>
                    <div>About Us</div>
                    <div>BestSeller Products</div>
                    <div>New Products</div>
                    <div>Special Products</div>
                    <div>Pages</div>
                    <div>Contact Us</div>
                </div>
            </div>
        </>
    )
}

export default Option4
