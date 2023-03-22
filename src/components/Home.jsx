import { useRef, useEffect } from "react";
import { styles } from '../styles';
import lottie from "lottie-web";
import { coding } from "../assets/index.js";
import { TypingEffect } from "./canvas";


const Home = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current && !containerRef.current.hasChildNodes()) {
      lottie.loadAnimation({
        container: containerRef.current,
        animationData: coding
      });
    }
  }, []);

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

    <section id="home" className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`} id="user-detail-name">
            Hi, I'm <span className='text-[#915eff]'>Rishab</span>
          </h1>



          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            And, I'm a <br id="user-detail-intro" className='sm:block hidden' /> Full stack Web Developer
          </p>
          <div className={`${styles.heroSubText} bg-[#407BFF] px-7 py-2 mt-12 rounded-xl w-fit hover:cursor-pointer hover:bg-[#7AA3FF] text-white`}>
            <a onClick={handleClick} id="resume-button-2">RESUME</a>
          </div>
        </div>

        <div id="coding" ref={containerRef} className="lg:w-[650px] lg:h-[650px] w-3/5 h-3/5 absolute bottom-0 right-0" />
        {/* <TypingEffect /> */}

      </div>

    </section>
  )
}

export default Home;