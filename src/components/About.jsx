import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  const fileId = "1vMZVo1CjEYCJqJUu6gKNMdHFN2CuFwkR"; // Replace with your own file ID

  const handleClick = (event) => {
    event.preventDefault();
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;

    const newTab = window.open(viewUrl, "_blank");
    newTab.focus();

    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.click();
    fetch(`https://real-teal-penguin-cuff.cyclic.app/logs/resume`).then((res)=>res.json()).then((res)=>console.log(res)).catch(()=>console.log("Something went wrong"))
  };
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionHeadText} text-center text-black`}>About Me</p>
        <div class="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-[#0E0F1F] border-0 dark:bg-[#0E0F1F]" />
            <span className={`${styles.sectionSubText} absolute px-3 font-medium text-[#407BFF] -translate-x-1/2 bg-black left-1/2 dark:text-[#407BFF]  dark:bg-white text-center`}>who i am</span>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        <div className="w-full flex bg-white border p-10 xs:p-5 rounded-xl flex-col text-center items-center justify-center xl:flex-row shadow-lg">
          <div className="mr-20 border rounded-xl xs:m-auto flex">
            <img src="https://avatars.githubusercontent.com/u/114337213?s=400&u=db6e5f1ffb2d6e229c8ab2bc932e24f84f35a07b&v=4" alt="Image" className="rounded-xl home-img" />
          </div>
          <div className="w-full flex items-center mt-[20px]">
            <div>
              <p className={`${styles.heroSubText} text-black text-left text-center`}>I'm Rishab And I'm a <span className="text-[#915EFF]">Developer</span></p>
              <p className="text-justify text-black mt-7 xs:text-center" id="user-detail-intro">
                Full stack Web Developer with proficiency in working with interdisciplinary teams and executing goal-oriented projects. Capable of writing production-ready code using HTML, CSS, and JavaScript on the frontend. NodeJS, express, and mongoose on the backend. Passionate about coding and intensely interested in working in a progressive organization.
              </p>

              <div className = {`${styles.heroSubText} bg-[#407BFF] px-4 py-2 mt-12 rounded-xl w-fit hover:cursor-pointer hover:bg-[#7AA3FF] text-white m-auto`}>
                <a onClick={handleClick}  id="resume-button-2">Preview Resume</a>
              </div>
            </div>
          </div>
{/* box-shadow: ; */}
        </div>
      </motion.p>

    </div>
  );
};

export default SectionWrapper(About, "about");
