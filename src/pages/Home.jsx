import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import coder from "../assets/images/Programmer.avif";
import "../assets/css/Home.css";
import resume from "../assets/resume/Aryan_Resume.pdf";

const Home = () => {
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
              <button className="btn1">View My Work</button>
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
              <img src={coder} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
