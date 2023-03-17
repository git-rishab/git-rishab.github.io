import { useRef, useEffect } from "react";
import { styles } from '../styles';
import lottie from "lottie-web";
import { coding } from "../assets/index.js";

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

  return (

    <section id="home" className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span id="user-detail-name" className='text-[#915eff]'>Rishab</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            And, I'm a <br id="user-detail-intro" className='sm:block hidden' /> Full stack Web Developer
          </p>
        </div>


      </div>

      <div id="coding" ref={containerRef} className="absolute w-[700px] h-[700px] top-[160px] right-[140px] " />

    </section>
  )
}

export default Home;