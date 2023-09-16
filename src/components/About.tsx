import React from "react";
import { layout } from "../styles";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      className={`${layout.sectionImgReverse} max-w-4xl md:flex-row flex-col relative md:py-36 py-24 gap-12`}
    >
      <div className="">
        <video
          autoPlay
          loop
          muted
          playsInline
          id="background-video"
          className="object-cover md:w-[120rem] md:h-[18rem] z-[-1]"
        >
          <source src="/assets/animation.webm" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>

      <motion.div
        className="items-start flex flex-col gap-4 "
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h4 className="text-[16px] text-gray-400 max-w-[350px] font-thin">
          - About me
        </h4>
        <h1 className="text-[24px] md:max-w-[470px] w-[350px] text-white font-bold">
          📊 Delivering Data-Driven Solutions:
        </h1>
        <p className="text-[24px] md:max-w-[470px] text-white font-thin w-[350px]">
          I specialize in providing end-to-end data science solutions,
          encompassing data analysis, machine learning, and predictive modeling.
          My work doesn't stop at insights; I turn data into strategies that
          drive business growth.
        </p>
        <h1 className="text-[24px] md:max-w-[470px] text-white font-bold w-[350px]">
          🤝 Cross-Functional Collaboration:
        </h1>
        <p className="text-[24px] md:max-w-[470px] text-white font-thin w-[350px]">
          My passion lies in partnering with cross-functional teams to drive
          innovation. I've honed the art of bridging the gap between technical
          and non-technical stakeholders, ensuring everyone speaks the language
          of data.
        </p>
        <h1 className="text-[24px] md:max-w-[470px] text-white font-bold w-[350px]">
          {" "}
          🔍 AI & NLP Expertise:
        </h1>
        <p className="text-[24px] md:max-w-[470px] text-white font-thin w-[350px]">
          I have a knack for designing AI-driven products that leverage machine
          learning (ML) and Natural Language Processing (NLP). My goal is to
          create products that continuously evolve to meet user needs.
        </p>
      </motion.div>
      <div className="absolute z-[-1] inset-0 w-[50%]  h-[50%] left-[20%] top-[20%] bg-gradient-to-r from-slate-500 to-cyan-400 opacity-70 rounded-full blur-2xl" />
    </section>
  );
};

export default About;
