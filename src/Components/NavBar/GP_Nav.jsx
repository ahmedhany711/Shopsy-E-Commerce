import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from '../../photos/ui ux home/FinalLog-removebg-preview.png'
// import logo from '../../photos/ui ux home/logo.png'
// import logo from '../../photos/ui ux home/logooo.png'
// import { IoSearchSharp } from "react-icons/io5";
// import { FaShoppingCart } from "react-icons/fa";
// import DarkMode from "./Darkmode";
// import { DropdownMenu, NavDropdown } from "react-bootstrap";
// import { MdAccountCircle } from "react-icons/md";


const menu = [{ id: 1, name: "Home", link: "/", },
{ id: 2, name: "About Us", link: "/", },
{ id: 2, name: "Services", link: "/", },
{ id: 3, name: "Blog", link: "/Blog", },
{ id: 4, name: "Profile", link: "/Profile", },

    // { id: 5, name: "Logout", link: "/Logout", },
]

const GPNav = () => {


    return (
        <>
            <div className="  bg-nav  backdrop-blur-[1px] font-contentFont fixed top-0 left-0 right-0 z-50  shadow-sm ">
                <div className="flex flex-col dark:fixed  top-0 left-0 right-0 z-50 w-full ">

                    {/* First Nav */}
                    <div className="  items-center  w-full  " >
                        <Container className="flex justify-between items-center    py-1 gap-5  ">

                            {/* Logo  */}
                            <div className="  w-[600px] text-white z-[1]">
                                <Link to="/" className="flex items-center ">
                                    <img src={logo} alt="logo" className="w-full h-full uppercase bg-transparent" />
                                </Link>
                            </div>

                            {/* Links */}
                            <div className="flex w-full h-full  py-4  "
                                data-aos="zoom-in"
                            >
                                <ul className=" list-none flex  sm:flex gap-[5px] md:gap-[1px] items-end   ml-auto  mb-0">
                                    {menu.map((data) => {
                                        return (
                                            <li key={data.id}  >
                                                <Link to={data.link}
                                                    className=
                                                    {`
                                                    ${data.id === 1 ? "text-active  " : "text-white hover:text-active"
                                                        }
                                                
                                                    no-underline   px-3   text-2xl
                                                    duration-300 hover:text-active
                                                    inline-block `
                                                    }
                                                >
                                                    {data.name}
                                                </Link>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>

                            {/* Login Button */}
                            <div>
                                <button className=" bg-white text-nav px-4 py-2 rounded-md  text-xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white">
                                    Login
                                </button>
                            </div>
                        </Container >
                    </div >

                </div >
            </div >
        </>
    );
}

export default GPNav;
