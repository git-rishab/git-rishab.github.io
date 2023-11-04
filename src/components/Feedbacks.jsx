import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in',
    });
  }, []);

  return (
    <div className={`md:mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        {/* <motion.div variants={textVariant()}> */}
          <h2 data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={styles.sectionHeadText}>Testimonials.</h2>
          {/* <p className={styles.sectionSubText}>What others say</p> */}
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} text-center flex justify-center items-center`}>
            <hr className="w-12 md:w-32" /><span className="px-2 md:px-4">What others say</span><hr className="w-12 md:w-32" />
          </div>
        {/* </motion.div> */}
      </div>
      <div className={`-mt-32 md:-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedback");
