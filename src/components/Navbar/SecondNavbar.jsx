import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import {Menu} from '../index'
import { DropLinks } from '../index';


const SecondNavbar = () => {
  return (
    <>
            
      {/* Second Navbar */}
      <div data-aos="zoom-in" className="flex justify-center lg:border-b">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data,index) => (
            <li key={index}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropLinks.map((data,index) => (
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
    </>
  )
}

export default SecondNavbar
