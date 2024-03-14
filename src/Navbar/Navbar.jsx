import React from "react";
import {FaSearch} from "react-icons/fa"
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { withCart } from "../withProvider";
import logo from "/FINDALL.png";

function Navbar({ totalcount }) {
  // navItems
  const navItems = (
    <div className="flex space-x-10 text- white font-medium text-md px-5 !gap-14">
      <div className=" hover:text-blue-500">
        <Link to={'/'}>Home</Link>
      </div>
      <div className=" hover:text-blue-500">
        <Link to={'/SingUp'}>SingUp</Link>
      </div>
      <div className=" hover:text-blue-500">
        <Link to={'/user-dashboard'}>Dipvisa</Link>
      </div>
      <div className=" hover:text-blue-500">
        <Link to={'/Admin'}>Admin</Link>
      </div>
    </div>
  ) 

  
  return (
    
    <div className=" bg-blue-200  sticky top-0 py-3 flex justify-between items-center shadow-md  ">

      <div className="">
        <Link to="/">
          <img className="ml-5 w-14 max-w-sm" src={logo} />
        </Link>
      </div >
      <div className=" flex justify-center mb-4 lg:mg-0">
      {navItems}
      </div>
      
      <div className="navbar-collapse w-100">
      <div className="navbar search">
        <div className="flex align-center">
          <input type="text"  className=' bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black ' placeholder="Search here"/>
          <Link TO =" " className="tet-white search-btn flex align-center justify-center">
            <i className="fa-solid fa-magnifying-glass bg-orange"></i>
          </Link>

        </div>
      </div>
      
      </div>
       
      <div className=" flex   ">
        <Link to="/products/cart">
          <BsCartCheck className="text-orange-500 text-xl hover:text-orange-500" />
        </Link>
        <span className="bg-orange-500 text-white rounded-full h-6 w-6 text-center  mr-5 ">
          {totalcount}
        </span>
      </div>
    </div>
    
  );
}

export default withCart(Navbar);
