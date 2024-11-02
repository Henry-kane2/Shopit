import React, { useState,useEffect } from "react";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Menu } from "../index";
import { DropLinks } from "../index";
import { useSelector} from "react-redux";


const Navbar = ({ handleOrderPopup }) => {
const [totalQuantity, setTotalQuantity] = useState(0);
const carts = useSelector((store) => store.cart.items);

useEffect(() => {
  let total = 0;
  carts.forEach((item) => (total += item.quantity));
  setTotalQuantity(total);
}, [carts]);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div
        className="fixed mb-5 bg-white-100 w-full h-[50px] flex px-2
       py-2 backdrop-blur-sm border border-black justify-between z-50"
      >
        <div className="flex ml-3 lg:ml-5">
          <img src="logo.svg" alt="logo" />
          <h2 className="ml-1 py-1.4 text-blue-500">Shopit</h2>
        </div>
        <div className=" -mr-5 md:flex lg:flex hidden scale-75 -pt-4 ">
          {/* order button */}
          <button
            onClick={() => handleOrderPopup()}
            className="bg-blue-600 hover:bg-blue-500 
            rounded-full h-9 w-9 p-2 ml-[420px] "
          >
            <FaCartShopping
              className="text-xl text-white items-center justify-center
               drop-shadow-sm cursor-pointer"
            />
            <div className="rounded-full bg-red-500 scale-75 left-0 text-white">{totalQuantity}</div>
          </button>
        </div>

        {/* Hamburger Icon for mobile  */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className=" focus:outline-none mr-3"
            aria-label={open ? "Close Menu" : " Open Menu"}
          >
            {open ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden fixed z-40 left-[170px]  border rounded-xl top-[50px] w-[300px] backdrop-blur-xl bg-white ">
          <ul className="  items-center gap-4">
            {Menu.map((data,index) => (
              <li
                key={index}
                className="m-3  border-b border-neutral-500 p-4"
              >
                <a
                  href={data.link}
                  className="inline-block px-4 hover:scale-125 duration-200 "
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Simple Dropdown and Links */}
            <li className="group relative cursor-pointer p-3">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Trending Products
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
      <div className="w-full h-[60px]" />

      <button
        onClick={() => handleOrderPopup()}
        className="bg-blue-600 hover:bg-blue-500 
        rounded-full h-9 w-9 p-2 ml-[420px] lg:hidden md:hidden scale-75 top-12 right-2 fixed z-50"
      >
        <FaCartShopping
          className="text-xl text-white items-center justify-center
         drop-shadow-sm cursor-pointer"
        />
        <div className="rounded-full bg-red-500 scale-75 left-0 text-white">{totalQuantity}</div>
      </button>
    </div>
  );
};

export default Navbar;
