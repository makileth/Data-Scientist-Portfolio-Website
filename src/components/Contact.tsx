import React from "react";
import { layout } from "../styles";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section
      className={`${layout.section} max-w-7xl md:h-[60rem] h-[70rem] md:mb-0 mb-24 justify-between md:items-start items-center relative gap-24 `}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col items-start justify-start px-12 md:py-0 py-24"
      >
        <h1 className="md:text-[76px] text-[48px]  text-white font-bold">Got a Project?</h1>
        <h1 className="text-[48px] text-transparent bg-clip-text bg-gradient-to-r  from-orange-500 to-blue-400 font-bold ">
          Let me help you!
        </h1>

        <h4 className="text-[18px] w-[300px] py-6 text-orange-500 underline hover:text-blue-400 transition duration-300">
          olivia-mitchell-datapro@amail.com →
        </h4>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col bg-gray-950 md:p-12 p-[10px] max-w-[22rem]"
      >
        <h1 className="text-[32px] text-white  font-bold mt-[20px] md:ml-0 ml-3">
          {" "}
          Want me to estimate your project?
        </h1>
        <div className="mx-auto md:w-full w-[85%] flex flex-col gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="How should I call you?"
            className="w-full h-[40px] mt-6 text-white font-thin bg-transparent border-b-2 border-slate-400 focus:border-b-blue-400  focus:outline-none transition duration-500"
          />
          <input
            type="text"
            placeholder="What is your email address?"
            className="w-full h-[40px] mt-6 text-white font-thin bg-transparent border-b-2 border-slate-400 focus:border-b-blue-400  focus:outline-none transition duration-500"
          />
          <textarea
            placeholder="Tell me more about your project"
            className="w-full h-[80px] max-h-[400px] mt-6 text-white font-thin bg-transparent border-b-2 border-slate-400 focus:border-b-blue-400 focus:outline-none transition duration-500"
          ></textarea>
           <button className="bg-orange-500 w-full h-[40px] text-white font-thin mt-6 md:mb-0 mb-6 transition duration-500 hover:bg-blue-400">
            Send
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
