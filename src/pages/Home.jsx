import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import coder from "../assets/images/programmer.avif";
import "../assets/css/Home.css";
import resume from "../assets/resume/Aryan_Resume.pdf";
import { useEffect, useState } from "react";

const Home = ({ scrolltoprojects, scrolltohome }) => {
  const [uparrow, setUparrow]=useState(false);
useEffect(()=>{

   const handelarrow = () => {
      if (window.scrollY > 50) {
        setUparrow(true);
      } else {
        setUparrow(false);
      }
    };

    window.addEventListener("scroll", handelarrow);
    return () => window.removeEventListener("scroll", handelarrow);
},[])

  return (
    <>
      <div id="home-main">
        <div id="home">
          <div className="content">
            <h1>
              Hello, I'm <span>Aryan Karmur</span>
            </h1>
            <p>
              React.js & Frontend Developer focused on building responsive,
              interactive web applications.
            </p>
            <div className="btn">
              <button className="btn1" onClick={scrolltoprojects}>
                View My Work
              </button>
              <a href={resume} target="_blank">
                <button className="btn2"> Download CV </button>
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/Aryankarmur" target="_blank">
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aryankaramur/"
                target="_blank"
              >
                <SlSocialLinkedin />
              </a>
              <a href="mailto:aryankaramur@gmail.com" target="_blank">
                <MdMailOutline />
              </a>
            </div>
            <div className="down">
              <FaChevronDown />
            </div>
          </div>
          <div className="image">
            <div className="imgdiv">
              <img src={coder} alt="coder image" />
            </div>
          </div>
          <div className={ `uparrow  ${uparrow ? "none" : ""}`} onClick={scrolltohome}>
            <div>

              <FaArrowUp/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
