import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartTab = ({setOrderPopup,orderPopup}) => {

     const carts = useSelector(Store => Store.cart.items);


 
  return (
    <>
      {orderPopup && (
        <div className={`popup `}>
          <div className="h-full w-full fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             p-4 shadow-md bg-white  rounded-md duration-200 w-[400px]"
            >
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* cartitems section */}
              <div className="mt-4">
                <div className="p-5">
                  {carts.map((item, key) => (
                    <CartItem key={key} data={item} />
                  ))}
                </div>
              </div>
              <div className=" ">
                <button className=" justify-center
                 border rounded-xl p-2 hover:scale-110
                 bg-red-600 text-white transition-transform duration-300">ORDER</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartTab;
