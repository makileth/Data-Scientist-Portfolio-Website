import React from "react";
import { layout } from "../styles";
import { useState } from "react";
import { motion } from "framer-motion";
const CaseStudies = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://i.pinimg.com/564x/f1/ca/4a/f1ca4a2b4143a4ce875b20261bc91a4c.jpg",
    "https://i.pinimg.com/564x/51/56/70/5156706291da5b3d39190fa1256f68f0.jpg",
    "/assets/startup.jpg",
  ];
  const header = [
    "Maximizing Revenue Growth Through Data-Backed Insights",
    "Revolutionizing Healthcare Delivery Through Data",
    "Boosting Customer Satisfaction with Data-Driven UX",
  ];
  const description = [
    "Olivia spearheaded a transformative project for a leading e-commerce platform. By analyzing vast datasets, she crafted predictive models that forecasted customer purchasing behavior. These insights enabled targeted marketing campaigns and personalized recommendations, resulting in a 15% increase in conversion rates and a substantial boost in annual revenue.",
    "In a collaboration with a prominent healthcare provider, our data scientist leveraged her expertise to enhance patient care. By mining electronic health records, she developed a predictive algorithm to identify at-risk patients, reducing hospital readmissions by 20%. Her work not only improved patient outcomes but also lowered healthcare costs significantly.",
    "Our data scientist played a pivotal role in a growth journey of our FinTech-startup. Through meticulous user research and data analysis, she reimagined the user experience of our platform. The result? A 30% increase in user engagement, a 25% decrease in churn, and a substantial expansion of our customer base. Her insights continue to shape the product roadmap of the company",
  ];
  const authors = [
    "© Some great e-commerce platform",
    "© Some great healthcare company",
    "© Some great startup",
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );``
  };

  return (
    <section
      className={` flex md:flex-row flex-col max-w-4xl justify-center items-center relative md:gap-36  gap-12 py-36 `}
    >
      <motion.div
        className="flex flex-col gap-6 "
        initial={{ opacity: 0, scale: 0.9, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h1 className="text-[24px] text-transparent md:w-[25rem] bg-clip-text bg-gradient-to-r md:ml-0 ml-4 from-orange-500 to-blue-400 font-bold ">
          {header[currentImageIndex]}
        </h1>
        <p className="text-slate-400 text-[21px] font-thin  md:ml-0 ml-4">
          {description[currentImageIndex]}
        </p>
        <p className="text-slate-200 text-[21px] flex items-end justify-end font-thin  md:mr-0 mr-3">
          {authors[currentImageIndex]}
        </p>
        <div className="flex flex-row gap-4 md:items-start md:justify-start items-center justify-center">
          <motion.img
            src="assets/arrow.svg"
            alt=""
            className="filter invert w-7 h-7 rotate-180 cursor-pointer hover:invert-[0.3] transition duration-300"
            onClick={handlePrev}
           
          />
          <motion.img
            src="assets/arrow.svg"
            alt=""
            className="filter invert brightness-0 w-7 h-7  cursor-pointer  hover:invert-[0.3] transition duration-300"
            onClick={handleNext}
        
          />
        </div>
      </motion.div>
      <div className="relative md:mr-0 mr-12 ">
        <div className="md:w-[35rem] md:h-[20rem] w-[17.5rem] h-[14rem] rounded-[10px] items-center flex relative">
          <motion.img
            src={images[currentImageIndex % images.length]}
            alt={`Image ${currentImageIndex}`}
            className="w-full h-full object-cover rounded-[10px] absolute"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </div>

        <div className="md:w-[35rem] md:h-[20rem] w-[17.5rem] h-[14rem] rounded-[10px] items-center flex absolute inset-0 top-7 left-7 z-[-1]">
          <motion.img
            src={images[(currentImageIndex + 1) % images.length]}
            alt={`Image ${currentImageIndex}`}
            className="w-full h-full object-cover rounded-[10px] absolute backdrop-blur-[100px]"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            
          />
        </div>

        <div className="md:w-[35rem] md:h-[20rem]  w-[17.5rem] h-[14rem] rounded-[10px] items-center flex absolute inset-0 top-14 left-14 z-[-2]">
          <motion.img
            src={images[(currentImageIndex + 2) % images.length]}
            alt={`Image ${currentImageIndex}`}
            className="w-full h-full object-cover rounded-[10px] absolute backdrop-blur-[100px]"
            initial={{ opacity: 0, x: 90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </div>
      </div>

      <motion.div className="absolute z-[-5] inset-0 w-[75%]  h-[75%] md:left-[60%] l-0 top-[13%] bg-gradient-to-l from-orange-400 to-blue-400  rounded-full blur-[10rem]" 
         initial={{ opacity: 0, scale: 0.9, x: -50 }}
         animate={{ opacity: 1, scale: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 1 }}
      />
    </section>
  );
};

export default CaseStudies;
