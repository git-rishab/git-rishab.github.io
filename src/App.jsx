import { BrowserRouter } from "react-router-dom";
import { About, Contact, Home, Navbar, Skills, Projects, StarsCanvas, Stats, Created } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">

        <div className="relative z-50 bg-[#0E0F1F]">
          <Navbar />
          <Home />
          <StarsCanvas/>
        </div>

        <div className="bg-white">
          <About />
        </div>

        <div className="bg-[#0E0F1F]">
          <Skills />
          <Projects />
        </div>

        <div className="bg-white">
          <Stats />
        </div>

        <div className="bg-white">
          <Contact />
        </div>
        <Created/>
        
      </div>
    </BrowserRouter>
  );
};


export default App;
