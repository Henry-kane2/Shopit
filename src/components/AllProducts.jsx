import React from "react";
import { ALLPRODUCT } from "./index";
import ProductCarts from "./ProductCarts";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="shop">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 43 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-sm text-primary"
        >
          Top Selling Products for you
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 43 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold"
        >
          All Products
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
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
        {ALLPRODUCT.map((product, key,index) => (
          <ProductCarts key={key} index={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
