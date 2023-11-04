import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import AOS from 'aos';

import "react-vertical-timeline-component/style.min.css";
import { redirect } from "../assets/index";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#F6F6F6",
        color: "#151E2C",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #F6F6F6" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#151E2C] text-[24px] font-bold'>{experience.title}</h3>
        <div className="flex items-center">
          <p
            className='text-[#6F6F6F] text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}&nbsp;
          </p>
          <Link to={experience.company_link} target="_blank">
            <img src={redirect} alt="redirect" className="h-[16px] w-[16px]" />
          </Link>
        </div>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <>
            <li
              key={`experience-point-${index}`}
              className='text-[#6F74A7] text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
            {experience.company_name === "WLC Technology" && index === 2 && <li className='text-[#6F74A7] text-[14px] pl-1 tracking-wider'>Contributed in many large projects like <a target="_blank" href="https://www.streamline.ai/"><u>Streamline</u></a>, <a target="_blank" href="https://new.trackify.ai/"><u>Trackify</u></a>, <a target="_blank" href="https://hyphenbrands.com/#!/"><u>Hyphen</u></a>, and many more.</li>}
          </>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {

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
      <h2 data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={`${styles.sectionHeadText} flex text-center`}>
        <div className="flex mx-auto">
          <div>
            Work&nbsp;
          </div>
          <div className='mx-auto'>
            Experience
            <div className='h-3 sm:h-6 bg-[#FFBE62] -mt-5 sm:-mt-9' />
          </div>
        </div>
      </h2>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} text-center flex justify-center items-center mt-4 md:mt-8`}>
        <hr className="w-12 md:w-32 h-[2px] bg-black" /><span className="text-black px-2 md:px-4">What I have done so far</span><hr className="w-12 md:w-32 h-[2px] bg-black" />
      </div>
      {/* </motion.div> */}

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor='#E6DEDD'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
