import React,{useState, useEffect} from 'react'
import{ALLPRODUCT} from './index';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../redux/Stores/Cart';

const CartItem = (props) => {

   const{productId, quantity}= props.data;

   const[detail,setDetail]=useState([]);

   const dispatch=useDispatch();

   useEffect(()=>{
    const findDetail = ALLPRODUCT.filter(product => product.id === productId)[0];
    setDetail(findDetail);
   },[productId])

const handleMinusQuantity = () =>{
  dispatch(changeQuantity({
    productId: productId,
    quantity: quantity - 1
  }))
}
const handlePlusQuantity = () =>{
  dispatch(changeQuantity({
    productId: productId,
    quantity: quantity + 1
  }))
}
  return (
    <div
      className="flex justify-between 
    items-center  m-2
      p-2 border-b-2
      border-slate-700 gap 5 rounded-md"
    >
      <img src={detail.img} alt="" className="w-12" />
      <h3>{detail.title}</h3>
      <p className="font-bold">${detail.price * quantity}</p>
      <div className="w-20 flex justify-between">
        <button
          className="bg-gray-200 
        rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200
         rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
