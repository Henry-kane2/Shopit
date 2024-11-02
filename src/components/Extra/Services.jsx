import React from "react";

import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";
const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl text-blue-600 md:text-5xl" />,
    title: "Free Shipping",
    description: "Free Shipping  On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl text-blue-600 md:text-5xl" />,
    title: "Safe Money",
    description: "safe money assurance",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl text-blue-600 md:text-5xl" />,
    title: "secured payment",
    description: "All payment secured",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl text-blue-600 md:text-5xl" />,
    title: "Online support",
    description: "Technical support",
  },
];

const Services = () => {
  return <div>
    <div className="container my-14 md:my-20 px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
            {ServiceData.map((data,index)=>(
            <div className="flex flex-col items-start sm:flex-row
            gap-4">
                {data.icon}
                <div>

                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
                </div>
            </div>

            ))}
        </div>
    </div>
  </div>;
};

export default Services;
