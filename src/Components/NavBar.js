import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const NavBar = () => {
    //State to  make a hamburger menu 
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="block  bg-purple-700 lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full bg-purple-700 pl-5  block flex-grow lg:flex   lg:items-center  lg:w-auto ${isOpen ? "block" : "hidden"}`} >
                <a href="#" className='lg:flex justify-left'>
                    Logo
                </a>
                <div className="text-sm  lg:flex justify-center flex-grow ">
                    <a href="#" className="block mt-4 pr-5 lg:inline-block lg:mt-0  text-white-200 mr-4">
                        First Link
                    </a>
                    <a href="#" className="block mt-4 pr-5 lg:inline-block  lg:mt-0 text-white-200 mr-4">
                        Second Link
                    </a>
                    <a href="#" className="block mt-4 pr-5  lg:inline-block lg:mt-0  text-white-200 mr-4">
                        Third Link
                    </a>
                    <a href="#" className="block mt-4  pr-5 lg:inline-block lg:mt-0  text-white-200 mr-4">
                        Fourth Link
                    </a>
                    <div>
                        <input type='text' className="rounded-md"></input>
                        <SearchIcon />
                    </div>
                </div>
                <div >
                    <button className="inline-flex items-center rounded-md h-10 m-2 bg-amber-300 border-0 py-2 px-4 text-black">
                        Register
                    </button>
                    <button className="inline-flex items-center rounded-md h-10 m-2 bg-amber-300 border-0 py-2 px-4 text-black">
                        SignIn
                        <ShoppingCartOutlinedIcon/>
                    </button>                  
                </div>
            </div>
        </>
    )
}
export default NavBar
