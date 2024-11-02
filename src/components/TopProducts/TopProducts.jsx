import React from "react";
import { ProductsData } from "../index";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";


const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="m-5" id="topproduct">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 43 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="text-sm text-primary"
          >
            Top Rated Products for you
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 43 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold"
          >
            Best Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 43 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs text-gray-400"
          >
            These are the best selling product in the market currently
          </motion.p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white  hover:bg-blue-500
               hover:text-white relative shadow-xl duration-300 
               group max-w-[300px]"
              key={data.title}
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
