import React from 'react';
import interactiveproduct from "../assets/interactive-product.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { motion } from 'framer-motion';
const Patern = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 m-6">
      <div className="container lg:flex grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div className="">
          <img
            src={interactiveproduct}
            alt="shoppingimage"
            className=" max-w-[400px] h-[350px] w-full  object-cover "
          />
        </div>
        <div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <motion.h1
              initial={{ opacity: 0, y: 43 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Products-Service Sales Executive
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 43 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              We are currently on a hunt for a dedicated and proactive Service
              Sales Execution . This role is essential in helping us
              establishand expand our clientbase within the Service industry
            </motion.p>
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 43 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1,delay:2 }}
                className="flex items-center gap-4"
              >
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                <p>Quality Products</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 43 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex items-center gap-4"
              >
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 " />
                <p>Fast Delivery</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 43 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 " />
                <p>Easy Payment method</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 43 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 " />
                <p>Get Offers</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patern
