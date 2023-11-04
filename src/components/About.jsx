import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import TypewriterComponent from "typewriter-effect";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in',
    });
  }, []);

  return (
    <section className="w-full mb-12 md:mb-24 ">
      <div className="">
        <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={`${styles.sectionHeadText} text-[#151E2C] flex mt-0 md:mt-8`}>
          <div className="flex mx-auto">
            <div>
              About&nbsp;
            </div>
            <div className='mx-auto'>
              Me
              <div className='h-4 sm:h-6 bg-[#FFBE62] -mt-5 sm:-mt-9' />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} flex justify-center items-center mt-4 md:mt-8`}>
          <hr className="w-12 md:w-32 h-[2px] bg-black" /><span className="text-black-100 px-2 md:px-4">WHO I AM</span><hr className="w-12 md:w-32 h-[2px] bg-black" />
        </div>
        <div className="mt-12 md:mt-18">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[16px] md:text-[24px] leading-[30px] md:leading-[50px]'
          >
            <div className="my-5 text-[20px] text-[#6F74A7] md:text-[42px] font-semibold">
              Hi,
            </div>
            <div className="my-5 text-[20px] md:flex text-[#6F74A7] md:text-[42px] font-semibold">
              I'm Rishab and

              I'm a &nbsp;
              <TypewriterComponent
                options={{
                  strings: ['Full Stack Web Developer', 'Software Developer', 'Prompt Engineer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            {/* <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" className="text-justify text-[#6F74A7]"> */}
            <div className="text-justify mt-12 text-[#6F74A7]">
            Full Stack Web Developer with proficiency in working with interdisciplinary teams and executing goal-oriented projects. Demonstrated expertise in writing production-ready code using React for frontend development, as well as Node.js and Express for backend implementation. Skilled in Generative AI and Prompt Engineering, with a strong passion for coding and a keen interest in contributing to a progressive organization.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");

{/* <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>Introduction</p>
  <h2 className={styles.sectionHeadText}>Overview.</h2>
</motion.div>

<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  I'm a skilled software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React, Node.js, and
  Three.js. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!
</motion.p>

<div className='mt-20 flex flex-wrap gap-10'>
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div> */}