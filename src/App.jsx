import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import SecondNavbar from "./components/Navbar/SecondNavbar";
import CartTab from "./components/CartTab";
import TopProducts from './components/TopProducts/TopProducts'
import Patern from './components/Patern.jsx';
import Products from "./components/Products/Products.jsx";
import AllProducts from "./components/AllProducts.jsx";
import { ALLPRODUCT } from "./components/index.js";
import Services from "./components/Extra/Services.jsx";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <div className="w-full h-[10px] sm:h-[10px]" />
      <SecondNavbar />
      <div className="w-full h-[20px]" />
      <Hero />
      <CartTab orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

      <TopProducts/>
      <Patern/>
      <Products/>
      <Services/>
      
       <AllProducts data={ALLPRODUCT}/>
      
    </>
  );
};

export default App;
