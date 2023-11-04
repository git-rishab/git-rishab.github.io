import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import emailjs from "@emailjs/browser";
import AOS from 'aos';

import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { coding, build, contact, mail, call, linkedin, github, gitHub, gitBlack } from "../assets/index.js";
import { contactInfo } from "../constants";

const Contact = () => {
  const contactAnimation = useRef(null);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in',
    });
    if (contactAnimation.current && !contactAnimation.current.hasChildNodes()) {
      lottie.loadAnimation({
        container: contactAnimation.current,
        animationData: contact
      });
    }
  }, [])

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        "service_2cmrdxp",
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        "template_ta6uzz9",
        {
          from_name: form.name,
          to_name: "Rishab",
          from_email: form.email,
          to_email: "rkc0660@gmail.com",
          message: form.message,
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        "w2WHISliSwvb07s37"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "between", 0.2, 1)}
        className='flex-[0.75] bg-[#F6F6F6] p-8 pt-6 rounded-2xl'
      >
        {/* <h3 data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={`${styles.sectionHeadText} flex`}> */}
        <h3 className={`${styles.sectionHeadText} flex`}>
          {/* Contact Me */}
          <div className="flex mx-auto">
            <div>
              Contact
              <div className='h-3 sm:h-6 bg-[#FFBE62] -mt-5 sm:-mt-9' />
            </div>
            <div className=''>
              &nbsp;Me
            </div>
          </div>
        </h3>
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        {/* <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} text-center flex justify-center items-center`}> */}
        <div className={`${styles.sectionSubText} text-center flex justify-center items-center`}>
          <hr className="w-12 md:w-32 h-[2px] bg-black" /><span className="px-2 md:px-4 text-black">Get in touch</span><hr className="w-12 md:w-32 h-[2px] bg-black" />
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-9 flex flex-col gap-7'
        >
          <label className='flex flex-col'>
            <span className='text-[#9D9D9D] font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              required
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-white py-4 px-6 placeholder:text-secondary text-[#9D9D9D] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#9D9D9D] font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              required
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-white py-4 px-6 placeholder:text-secondary text-[#9D9D9D] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#9D9D9D] font-medium mb-4'>Your Message</span>
            <textarea
              rows={4}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-white py-4 px-6 placeholder:text-secondary text-[#9D9D9D] rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-white py-3 px-8 rounded-full outline-none w-fit text-[#9D9D9D] font-bold border border-white shadow-sm shadow-primary transition-transform duration-300 ease-out hover:scale-105'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "between", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] flex justify-center'
      >
        <div className=" md:p-[40px] rounded-[20px] p-[20px] grid gap-3 m-auto bg-[#F6F6F6] text-[#9D9D9D] font-semibold">
          {/* <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={`${styles.heroSubText} text-black text-center flex justify-center items-center`}> */}
          <div className={`${styles.heroSubText} text-black text-center flex justify-center items-center`}>
            <hr className="w-12 md:w-32 h-[2px] bg-black" /><span className="px-2 md:px-4">
              <div className="flex mx-auto">
                <div>
                  Get in&nbsp;
                </div>
                <div className=''>
                  touch
                  <div className='h-2 sm:h-3 bg-[#FFBE62] -mt-3 sm:-mt-4' />
                </div>
              </div>
            </span><hr className="w-12 md:w-32 h-[2px] bg-black" />
          </div>

          <div className="mt-3 md:mt-5 flex  gap-3 md:gap-7 text-[14px] md:text-[18px] items-center">
            <a className="hover:underline" href="https://github.com/git-rishab" id="contact-github" target="_blank">
              <img src={gitBlack} alt="github" className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a className="hover:underline" href="https://github.com/git-rishab" id="contact-github" target="_blank">github.com/git-rishab</a>
          </div>

          <div className="mt-2 md:mt-4 flex  gap-3 md:gap-7 text-[14px] md:text-[18px] items-center">
            <a className="hover:underline" href="https://www.linkedin.com/in/rishab-kumar-chaurasiya/" target="_blank" id="contact-linkedin">
              <img src={linkedin} alt="linkedin" className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a className="hover:underline" href="https://www.linkedin.com/in/rishab-kumar-chaurasiya/" target="_blank" id="contact-linkedin">linkedin.com/in/rishab</a>
          </div>

          <div className="mt-2 md:mt-4 flex  gap-3 md:gap-7 text-[14px] md:text-[18px] items-center">
            <a className="hover:underline" href="mailto:rishabkumarchaurasiya@gmail.com">
              <img src={mail} alt="mail" className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <p id="contact-email">
              <a className="hover:underline" href="mailto:rishabkumarchaurasiya@gmail.com">
                rishabkumarchaurasiya@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-2 md:mt-4 flex  gap-3 md:gap-7 text-[14px] md:text-[18px] items-center">
            <a className="hover:underline" href="tel:+918789704301">
              <img src={call} alt="call" className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <span id="contact-phone">
              <a className="hover:underline" href="tel:+918789704301">
                +91 8789-704-301
              </a>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

{/* <div className='hidden md:block mx-auto lg:w-[380px] lg:h-[380px] md:w-3/5 md:h-3/5 w-4/5 h-4/5' ref={contactAnimation} /> */ }