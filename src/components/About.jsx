import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionHeadText} text-center`}>About Me</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        <div className="w-full flex bg-[#3C2972] p-10 rounded-xl">
          <div className="mr-20 home-img">
            <img src="https://avatars.githubusercontent.com/u/114337213?s=400&u=db6e5f1ffb2d6e229c8ab2bc932e24f84f35a07b&v=4" alt="Image" className="rounded-xl" />
          </div>
          <div className="w-full flex items-center">
            Full stack Web Developer with proficiency in working with interdisciplinary teams and executing goal-oriented projects. Capable of writing production-ready code using HTML, CSS, and JavaScript on the frontend. NodeJS, express, and mongoose on the backend. Passionate about coding and intensely interested in working in a progressive organization.
          </div>

        </div>
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
