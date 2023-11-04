import React, { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';

import { coding, build, contact, computer, midLinkedIn, midGithub } from "../assets/index.js";

const Hero = () => {
  return (
    // <section ref={backgroundRef} className='relative w-full min-h-screen mx-auto'>
    <section className='bg-[#F6F6F6] w-full md:min-h-screen mx-auto'>
      <div className={`pt-36 pb-14 sm:pt-42 lg:pt-48 px-8 sm:px-10 lg:px-12 xl:px-14 mx-auto max-w-full flex flex-col md:flex-row items-start gap-14 md:gap-0`}>
        <div className='w-full flex flex-col gap-6 sm:gap-8 lg:gap-12'>
          <div className='text-[#0252CD] text-[18px] sm:text-[24px] lg:text-[28px] xl:text-[32px] font-bold'>
            Hi, I am Rishab
          </div>
          <div className='text-black text-[42px] sm:text-[48px] lg:text-[56px] xl:text-[60px] font-bold'>
            <div>
              Professional
            </div>
            <div className='flex '>
              <div className=''>
                Software Developer
                <div className='h-4 sm:h-6 bg-[#FFBE62] -mt-7 sm:-mt-9' />
              </div>
            </div>
          </div>
          <div className='text-[#9D9D9D] mt-8 text-[14px] lg:text-[18px] text-justify sm:text-[16px] font-medium'>
            I am a passionate Full Stack Web Developer with a knack for creating intuitive and visually stunning digital experiences. With years of experience and a deep understanding of emerging technologies, I bring a unique blend of creativity and technical expertise to every project.
          </div>
          <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-8 sm:gap-14 md:gap-8 lg:gap-14 items-center mt-8'>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={50}
            >
              <button className='py-4 px-6 text-[14px] font-bold rounded-full bg-[#0252CD] transition-transform duration-300 ease-out hover:scale-105'>
                Contact Us
              </button>
            </Link>
            <div className='flex items-center justify-center gap-10'>
              <a className="" href="https://linkedin.com/in/rishab-kumar-chaurasiya/" target="_blank" id="contact-linkedin">
                <img src={midLinkedIn} alt="LinkedIn" className='cursor-pointer transition-transform duration-300 ease-out hover:scale-150' />
              </a>
              <a className="hover:underline" href="https://github.com/git-rishab" id="contact-github" target="_blank">
                <img src={midGithub} alt="GitHub" className='cursor-pointer transition-transform duration-300 ease-out hover:scale-150' />
              </a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="6" viewBox="0 0 110 6" fill="none">
              <path d="M109.887 3L107 0.113249L104.113 3L107 5.88675L109.887 3ZM0 3.5H107V2.5H0V3.5Z" fill="#0252CD" />
            </svg>
          </div>
        </div>
        <div className='w-full hidden md:flex items-center justify-center'>
          <img src={computer} alt="" className='' />
        </div>
      </div>
    </section>
  )
}

export default Hero; 
