import React from 'react'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Created } from "../components";

const Home = () => {
    return (
        <div className="relative z-0 bg-white">
            {/* <Navbar /> */}
            <div className="">
                <Hero />
            </div>
            {/* <div className="bg-aboutUs bg-cover bg-no-repeat bg-center md:min-h-screen"> */}
            <div className="bg-white">
                <About />
            </div>
            {/* <div className="bg-[#DFDFDF] md:bg-skills bg-cover bg-no-repeat bg-center lg:min-h-screen"> */}
            <div className="bg-[#F6F6F6] lg:min-h-screen">
                <Tech />
            </div>
            <div className="bg-white">
                <Experience />
            </div>
            <div className="bg-[#F6F6F6]">
                <Works />
            </div>
            {/* <Feedbacks /> */}
            <div className="bg-white">
                <Contact />
                {/* <StarsCanvas /> */}
            </div>
            {/* <Created /> */}
        </div>
    )
}

export default Home