import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Created } from "./components";
import { DriveAway, Talkies, Parenting, Home } from "./pages";

const App = () => {
  // console.clear();
  return (
    <BrowserRouter>
      {/* <div className="relative z-0">
        <Navbar />
        <div className="">
          <Hero />
        </div>
        <div className="bg-white bg-no-repeat bg-center md:min-h-screen">
          <About />
        </div>
        <div className="bg-[#F6F6F6] lg:min-h-screen">
          <Tech />
        </div>
        <div className="bg-white">
          <Experience />
        </div>
        <div className="bg-[#F6F6F6]">
          <Works />
        </div>
        <Feedbacks />
        <div className="bg-white">
          <Contact />
          <StarsCanvas />
        </div>
        <Created />
      </div> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talkies" element={<Talkies />} />
        <Route path="/driveaway" element={<DriveAway />} />
        <Route path="/parentingassist" element={<Parenting />} />
      </Routes>
      <Created />
    </BrowserRouter>
  );
};

export default App;


// bg-hero-pattern