import React from "react";
import styles, { layout } from "../styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className={`${layout.section} md:max-w-7xl h-[60rem] md:my-0 my-24 justify-around items-center relative `}
    >
      <motion.div className="flex flex-col items-start  md:ml-0 ml-6 " 
        initial={{ opacity: 0, scale: 0.9, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h1 className="md:text-[76px] text-[48px] text-white  font-bold">Olivia Mitchell</h1>
        <h1 className="md:text-[48px] text-[32px] text-transparent bg-clip-text bg-gradient-to-r  from-orange-500 to-blue-400 font-bold ">
          LEAD DATA SCIENTIST
        </h1>
        <p className="text-[24px] text-gray-400 md:max-w-[470px] w-[95%]  mt-6 font-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt tempus neque a suscipit. Cras interdum aliquam lorem, ut
          finibus eros scelerisque ut. Phasellus faucibus nisi a massa euismod
          tincidunt. In hac habitasse platea dictumst. Nam arcu mauris,
          porttitor ut nibh sed, ornare dictum sapien.
        </p>
        <h4 className="text-[18px] text-orange-500 underline py-6 hover:text-blue-400 transition duration-300">My Story →</h4>
      </motion.div>
      <motion.div className="h-[30rem] md:w-[24rem] w-[80%] flex md:ml-[7rem]"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
      >
        <img
          src="https://i.pinimg.com/564x/95/22/5d/95225d4467e181241e40ffaec5993992.jpg"
          alt=""
          className="w-full object-cover rounded-[10px]"
        />
      </motion.div>
      <motion.div className="absolute z-[-1] inset-0 md:w-[75%] md:h-[75%] w-[45%] h-[20%] md:left-[45%] left-0 top-[15%] bg-gradient-to-r from-orange-500 to-blue-400  rounded-full blur-[10rem]" 
         initial={{ opacity: 0, scale: 0.9,   }}
         animate={{ opacity: 1, scale: 1,  }}
         transition={{ duration: 0.5, delay: 1 }}
      />
      
    </section>
  );
};

export default Hero;
