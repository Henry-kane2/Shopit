import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

const ProductCart = (props) => {
  const {  img, rating, color, title } = props.data;


  return (
    <div>
      <motion.div className="space-y-3">
        <img
          src={img}
          alt="product"
          className="h-[220px] w-[150px] object-cover rounded-md"
        />
        <motion.div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{color}</p>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span>{rating}</span>{" "}
           
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductCart;
