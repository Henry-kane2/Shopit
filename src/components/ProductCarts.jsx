import React from "react";

import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/Stores/Cart";

const ProductCarts = (props) => {
  const carts = useSelector((Store) => Store.cart.items);

  const { id, img, price, rating, color, title  } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  return (
    <div className="mt-14 mb-12">
      <div className="container">
       
        {/* Body section */}
        <div>
          <div >
            {/* card section */}
            
              <motion.div >
                <motion.div
                  initial={{ opacity: 0, x: -54 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                 
                  className="space-y-3"
                >
                  <img
                    src={img}
                    alt="product"
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-600">{color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{rating}</span>{" "}
                      <button
                        className=" bg-neutral-600
                       hover:bg-blue-500 rounded-xl p-1
                        text-white"
                        onClick={handleAddToCart}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarts;
