import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AOS from 'aos';


import { styles } from "../styles";
import { github, launch } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectShowcase from "./ProjectShowcase";

const ProjectCard = ({
  index,
  name,
  short,
  description,
  tags,
  image,
  bg,
  source_code_link,
  live_project_link,
  showcasePage,
  showCase,
}) => {
  const navigate = useNavigate();

  const toggleProjectShowcase = (showcasePage, showCase) => {
    sessionStorage.setItem('projectData', JSON.stringify(showCase));
    navigate(`${showcasePage}`)
  };
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className={`p-5 rounded-2xl sm:w-[360px] w-full ${bg}`}>
      <div className='relative w-full'>
        <img
          src={image}
          alt='project_image'
          className='object-cover w-full mx-auto rounded-2xl'
          onClick={() => window.open(live_project_link, "_blank")}
        />
      </div>

      <div className='mt-5'>
        <div className="flex justify-between items-center" >
          <h3 onClick={() => window.open(live_project_link, "_blank")} className='text-white font-bold text-[24px] cursor-pointer'>{name}</h3>
          {/* <h1 className="cursor-pointer font-bold text-[16px]">More Info</h1> */}
        </div>
        <p className='mt-2 text-white text-justify text-[14px]'>{short}</p>
      </div>

      <div className="flex gap-12 justify-between mt-4" >
        <button onClick={() => window.open(live_project_link, "_blank")} className="p-2 px-4 rounded-full flex items-center justify-center gap-2 border text-white font-bold shadow-sm shadow-white">
          <div className='black-gradient w-6 h-6 rounded-full flex justify-center items-center cursor-pointer'>
            <img
              src={launch}
              alt='source code'
              className='w-3/4 h-3/4 object-contain'
            />
          </div>
          Live
        </button>
        <button onClick={() => window.open(source_code_link, "_blank")} className="p-2 px-4 rounded-full flex items-center justify-center gap-2 border text-white font-bold shadow-sm shadow-white">
          <div className='black-gradient w-6 h-6 rounded-full flex justify-center items-center cursor-pointer'>
            <img
              src={github}
              alt='source code'
              className='w-3/4 h-3/4 object-contain'
            />
          </div>
          Code
        </button>
      </div>

      <div className="mt-6">
        <span onClick={() => toggleProjectShowcase(showcasePage, showCase)} className="hover:underline cursor-pointer text-white font-bold">See Project Details</span>
      </div>

      <div className='mt-2 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] text-white`}
          // className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

const Works = () => {
  const [projectShowcase, setProjectShowcase] = useState(false);
  const [project, setProject] = useState(null);

  const navigate = useNavigate();

  const toggleProjectShowcase = (projectData) => {
    sessionStorage.setItem('projectData', JSON.stringify(projectData.showCase));
    navigate(`${projectData.showcasePage}`)
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in',
    });
  }, []);

  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <h2 data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={`${styles.sectionHeadText} flex`}>
        {/* Featured Projects */}
        <div className="flex mx-auto">
          <div>
            Featured
            <div className='h-3 sm:h-6 bg-[#FFBE62] -mt-5 sm:-mt-9' />
          </div>
          <div className=''>
            &nbsp;Projects
          </div>
        </div>
      </h2>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} text-center flex justify-center items-center mt-2 md:mt-4`}>
        <hr className="bg-black h-[2px] w-12 md:w-32" /><span className="text-black px-2 md:px-4">My work</span><hr className="bg-black h-[2px] w-12 md:w-32" />
      </div>
      {/* </motion.div> */}

      <div className='w-full flex justify-center mt-4'>
        <div className='mt-3 text-[#9D9D9D] text-[16px] md:text-[20px] max-w-3xl leading-[30px] text-justify'>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </div>
      </div>

      <div className='mt-20 flex flex-col gap-10'>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="md:hidden flex justify-center">
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            </div>

            <div className={`rounded-3xl hidden  md:flex ${project.bg} px-6 lg:px-10 gap-10 h-[280px] lg:h-[320px] xl:h-[360px] text-white ${index % 2 === 1 ? 'flex-row-reverse' : ''} `}>
              <div className="w-full flex flex-col gap-4 lg:gap-6 xl:gap-8 justify-center">
                <div className="text-white text-[28px] lg:text-[36px] xl:text-[40px] font-bold">
                  <div>{project.name}</div>
                  {/* <span className="text-[16px] lg:text-[18px] xl:text-[20px]">{project.short}</span> */}
                  <div className="text-[12px] lg:text-[14px] leading-[16px] lg:leading-[18px] font-normal text-justify xl:text-[14px]">{project.description}</div>
                </div>
                <div className="flex gap-12" >
                  <button onClick={() => window.open(project.live_project_link, "_blank")} className="p-2 px-4 rounded-full flex items-center justify-center gap-2 border font-bold shadow-sm shadow-white transition-transform duration-300 ease-out hover:scale-105">
                    <img
                      src={launch}
                      alt='source code'
                      className='h-6 w-6 lg:w-8 lg:h-8 object-contain'
                    />
                    Live
                  </button>
                  <button onClick={() => window.open(project.source_code_link, "_blank")} className="p-2 px-4 rounded-full flex items-center justify-center gap-2 border font-bold shadow-sm shadow-white transition-transform duration-300 ease-out hover:scale-105">
                    <img
                      src={github}
                      alt='source code'
                      className='h-6 w-6 lg:w-8 lg:h-8 object-contain'
                    />
                    Code
                  </button>
                </div>
                <div className="flex">
                  <span onClick={() => toggleProjectShowcase(project)} className="flex group items-center cursor-pointer gap-6">
                    <span className="hover:underline text-[14px] font-bold">See Project Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="8" viewBox="0 0 36 8" fill="none" className="transition-transform duration-300 ease-out group-hover:translate-x-6">
                      <path d="M35.3536 4.35356C35.5488 4.15829 35.5488 3.84171 35.3536 3.64645L32.1716 0.464469C31.9763 0.269207 31.6597 0.269207 31.4645 0.464469C31.2692 0.659731 31.2692 0.976313 31.4645 1.17158L34.2929 4L31.4645 6.82843C31.2692 7.02369 31.2692 7.34027 31.4645 7.53554C31.6597 7.7308 31.9763 7.7308 32.1716 7.53554L35.3536 4.35356ZM-4.37114e-08 4.5L35 4.5L35 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="white" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <img onClick={() => window.open(project.live_project_link, "_blank")} src={project.image} alt="Img" className="rounded-2xl cursor-pointer transition-transform duration-300 ease-out hover:scale-105" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {projectShowcase && <ProjectShowcase project={project} />} */}
    </>
  );
};

export default SectionWrapper(Works, "projects");
