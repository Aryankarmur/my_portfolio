import { useRef } from "react";
import "./App.css";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contect = useRef(null);

  const scrolltoSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        scrolltohome={() => scrolltoSection(home)}
        scrolltoabout={() => scrolltoSection(about)}
        scrolltoskills={() => scrolltoSection(skills)}
        scrolltoprojects={() => scrolltoSection(projects)}
        scrolltocontect={() => scrolltoSection(contect)}
      />
      <div ref={home}>
        <Home
          scrolltoprojects={() => scrolltoSection(projects)}
          scrolltohome={() => scrolltoSection(home)}
        />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={projects}>
        <Projects />
      </div>
      <div ref={contect}>
        <Contect />
      </div>
    </>
  );
}

export default App;
