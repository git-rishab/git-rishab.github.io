import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { build } from "../assets/index.js";

const Skills = () => {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   if (containerRef.current && !containerRef.current.hasChildNodes()) {
  //     lottie.loadAnimation({
  //       container: containerRef.current,
  //       animationData: build
  //     });
  //   }
  // }, []);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <div className={`${styles.sectionHeadText} text-center text-white`}>Skills</div>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-white border-0 dark:bg-white" />
            <span className={`${styles.sectionSubText} absolute px-3 font-medium text-[#407BFF] -translate-x-1/2 bg-[#407BFF] left-1/2 dark:text-[#407BFF] dark:bg-[#0E0F1F] text-center`}>what i have</span>
        </div>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 p-10 rounded-xl skills-card ' id="skills">

        {technologies.map((technology) => (
          <div className='w-28 h-28 ' key={technology.name}>
            <img src="" alt="" className="skills-card-img" />
            <BallCanvas icon={technology.icon} />
            <div className="text-center skills-card-name">{technology.name}</div>
          </div>

        ))}
      </div>
      {/* <div id="coding" ref={containerRef} className="w-[500px] h-[200px] p-0 m-0 border flex justify-self-center" /> */}
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
