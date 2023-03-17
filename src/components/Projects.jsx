import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, deploy } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { build } from "../assets/index.js";

const ProjectCard = ({
  
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
            <div
              onClick={() => window.open(deployed_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={deploy}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.hasChildNodes()) {
      lottie.loadAnimation({
        container: containerRef.current,
        animationData: build
      });
    }
  }, []);
  return (
    <>
      <div id="coding" ref={containerRef} className="w-[500px] h-[500px] absolute top-[-200px] left-[-100px]" />
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionHeadText} text-center text-white`}>Projects</p>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-8 bg-white border-0 dark:bg-white" />
          <span className={`${styles.sectionSubText} absolute px-3 font-medium text-[#407BFF] -translate-x-1/2 bg-[#407BFF] left-1/2 dark:text-[#407BFF] dark:bg-[#0E0F1F]`}>what i have built</span>
      </div>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          
        </motion.p>
      </div>

      <div className='mt-5 flex flex-wrap gap-7'>

        {projects.map((project, index) => (
          <ProjectCard  key={`project-${index}`} index={index} {...project} />
        ))}

      </div>
    </>
  );
};

export default SectionWrapper(Projects, "project");
