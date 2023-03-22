import { BrowserRouter } from "react-router-dom";
import { About, Contact, Home, Navbar, Skills, Projects, StarsCanvas, Stats, Created } from "./components";

const App = () => {
  setTimeout(()=>{
    console.clear();
  },2000)


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
    {/* coomit */}
        <div className="relative z-50 bg-[#0E0F1F]">
          <Navbar />
          <Home />
          <div className = "hidden xl:contents">
            <StarsCanvas/>
          </div>
        </div>

        <div className="bg-white">
          <About />
        </div>

        <div 
        // className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
        className="bg-[#050816]"
        >
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
