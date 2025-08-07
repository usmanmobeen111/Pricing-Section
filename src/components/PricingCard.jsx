import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
const PricingCard = ({ name, price, frequency, features, cta, isPopular }) => {
  return (
    <div>
      <motion.div initial={{opacity:0, y: 20}} animate={{opacity:1, y:0 }} transition={{duration:0.5}} className="bg-white p-6 rounded-lg shadow-lg m-4 w-80 flex flex-col items-center gap-4">
        {isPopular && (
          <span className="bg-green-400 text-white px-2 py-1">Popular</span>
        )}
        <motion.h1 initial={{opacity:0, y: 20}} animate={{opacity:1, y:0 }} transition={{duration:0.5}} className="text-gray-700 font-bold text-2xl">{name}</motion.h1>
        <h2 className="text-gray-600 text-xl">
          {price}/<span className="text-lg">{frequency}</span>
        </h2>
        <ul>
          {features.map((feature, index) => (
            <motion.li initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.5, delay:index/3}} key={index} className="flex items-center gap-2 my-2">
              <FaCheckCircle className="text-primary/85" /> {feature}
            </motion.li>
          ))}
        </ul>
        <motion.button whileHover={{ scale: 1.05 }}  className="bg-gradient-to-r from-primary/85 my-2 to-secondary/85 hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-white py-2 px-4 rounded w-full transition duration-300 cursor-pointer">
          {cta}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PricingCard;
