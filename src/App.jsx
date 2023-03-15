import { BrowserRouter } from "react-router-dom";
import { About, Contact, Home, Navbar, Skills, Projects, StarsCanvas, Stats } from "./components";

const App = () => {
  return (
    <BrowserRouter> 
      <div className="relative z-0 bg-[#0E0F1F]">

        <div className="relative z-50">
          <Navbar />
          <Home />
          <StarsCanvas/>
        </div>

        <div className = "bg-[#0E0F1F]">
          <About />
        </div>

        <div className = "bg-[#0E0F1F]">
          <Skills />
        </div>

        <div className = "bg-[#0E0F1F]">
          <Projects />
        </div>

        <div className = "bg-[#0E0F1F]">
          <Stats />
        </div>

        <div>
          <Contact />
        </div>

      </div>
    </BrowserRouter>
  );
};


export default App;
