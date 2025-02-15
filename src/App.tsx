import { ThemeProvider } from "./context/ThemeProvider";
import HeroSection from "./components/hero-section";
import CareerSection from "./components/career-section";
import ProjectSection from "./components/project-section";
import SkillsSection from "./components/skills-section";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import Footer from "./components/footer";
import { useEffect } from "react";
import { initGA } from "./utils/analytics";

/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> 
<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>*/

function App() {
  useEffect(() => {
    initGA();
  }, []);
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen relative">
        <div className="fixed inset-0 h-full w-full bg-background bg-grid-pattern bg-[size:6rem_4rem]"></div>
          {/* Content container with higher z-index */}
          {/* <div className="fixed top-0 z-[-2] h-full w-full bg-background bg-dot-pattern bg-[size:20px_20px]"></div> */}
          <div className="relative z-50 mx-auto max-w-4xl pt-20 px-4">
            {/* <Loader /> */}
            <Header />
            <HeroSection />
            <CareerSection />
            <ProjectSection />
            <SkillsSection />
            <Footer />
          </div>
         
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
