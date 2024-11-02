import React from "react";
import Slider from "react-slick";
import { HeroData } from "../components/index";
import {motion} from 'framer-motion'
import Button from "./Extra/Button";
const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="" id="home">
      {/*HERO SECTION */}
      <div
        className=" overflow-hidden rounded-2xl min-h-[550px] sm:min-h-[650px] 
       bg-gradient-to-t from--700/80 to-white-300 flex justify-center
        items-center "
      >
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div
                    className="flex flex-col justify-center gap-4
                    sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
                    relativez-10"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 76 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="text-2xl sm:text-6xl lg:text-2xl
                     font-bold"
                    >
                      {data.subtitle}
                    </motion.h1>
                    <motion.h1
                      initial={{ opacity: 0, y: 76 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className=" text-5xl sm:text-6xl  lg:text-7xl font-bold"
                    >
                      {data.title}
                    </motion.h1>
                    <motion.h1
                      initial={{ opacity: 0, y: 76 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="text-5xl uppercase text-neutral-600 sm:text-[80px] 
                    md:text-[100px xl:text-[130px] font-bold"
                    >
                      {data.title2}
                    </motion.h1>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    ><a href="#shop">

                      <Button
                        text="Shop Now"
                        bgColor="bg-red-600"
                        textColor="text-white"
                        />
                        </a>
                    </motion.div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <motion.div
                      initial={{ opacity: 0, x: 76 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 1.5 }}
                    >
                      <img
                        src={data.img}
                        alt="product"
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] 
                    sm:scale-105 lg:scale-110 object-contain 
                    mx-auto drop-shadow-[-80px_4px_6px_rgba(0,0,0,.4)] relative z-30"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
