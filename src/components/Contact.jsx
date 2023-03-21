import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { github_logo, call, mail, linkedin } from "../assets/index";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
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
    className={` mt-20 `}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionHeadText} text-center text-[#0E0F1F]`}>Contact me</p>
        <div class="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-[#0E0F1F] border-0 dark:bg-[#0E0F1F]" />
          <span className={`${styles.sectionSubText} absolute px-3 font-medium text-[#407BFF] -translate-x-1/2 bg-black left-1/2 dark:text-[#407BFF]  dark:bg-white text-center`}>get in touch</span>
        </div>
      </motion.div>

      <div className={`xl:mt-12 flex xl:flex-row justify-between flex-col-reverse overflow-hidden`} id="contact">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex border md:p-8 rounded-2xl w-6/12 w-full p-4'
        >

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-8 w-full'
          >
          <h3 className={`${styles.heroSubText} text-black`}>Message me</h3>
            <label className='flex flex-col'>
              <span className='text-[#0E0F1F] font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name' 
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className=' py-4 px-6 placeholder:text-secondary rounded-lg outline-none border font-medium bg-white text-black'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-[#0E0F1F] font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your E-mail address?"
                className=' py-4 px-6 placeholder:text-secondary rounded-lg outline-none border bg-white text-black font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-[#0E0F1F] font-medium mb-4'>Your Message</span>
              <textarea
                rows={3}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className=' py-4 px-6 placeholder:text-secondary rounded-lg outline-none border bg-white text-black font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='flex xl:h-auto h-[350px] w-6/12 xs:w-full '
        >
          <div className=" md:p-[30px] border rounded-[20px] p-2 m-auto">
            <div className={`${styles.heroSubText}`}>
              <span className="text-[#0E0F1F]">Get in touch</span>
            </div>

            <div className="text-black mt-4 flex">
              <img src={github_logo} alt="github" className="h-6 w-6 mr-7 xs:mr-3"  />
              <a href="https://github.com/git-rishab"  id="contact-github" target="_blank">github.com/<u>rishab</u></a>
            </div>

            <div className="text-black mt-3 flex">
              <img src={linkedin} alt="linkedin" className="h-6 w-6 mr-7 xs:mr-3" />
              <a href="https://www.linkedin.com/in/rishab-kumar-chaurasiya-a144b4234/" target="_blank" id="contact-linkedin">linkedin.com/in/<u>rishab</u></a>
            </div>

            <div className="text-black mt-3 flex">
              <img src={mail} alt="mail" className="h-6 w-6 mr-7 xs:mr-3" />
              <p id="contact-email"><u>rishabkumarchaurasiya</u>@gmail.com</p>
            </div>

            <div className="text-black mt-3 flex">
              <img src={call} alt="call" className="h-6 w-6 mr-7 xs:mr-3" />
              <span id="contact-phone">+91 87897-04301</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
