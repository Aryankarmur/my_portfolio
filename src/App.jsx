import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
    </>
  );
}

export default App;
