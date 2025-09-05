import code from "../assets/images/code.png";
import { IoCode } from "react-icons/io5";
import { RxLightningBolt } from "react-icons/rx";
import "../assets/css/About.css";

const About = () => {
  const handelrotate = (e) => {
    e.target.style.transform = "rotate(360deg)";
    e.target.style.transition = "transform 0.5s ease";
  };

  const handelleve = (e) => {
    e.target.style.transform = "rotate(0deg)";
  };

  return (
    <>
      <div id="about-main">
        <div id="about">
          <div className="heading">
            <h2>About Me</h2>
            <div></div>
          </div>

          <div className="about-detail">
            <div className="image">
              <div className="code-img">
                <img src={code} alt="code image" />
              </div>
            </div>
            <div className="about-me">
              <h3>Passionate Developer</h3>
              <p>
                Hi, I'm Aryan Karmur, a passionate Frontend Developer from
                jamnagar, Gujarat. I have successfully completed a Bachelor of
                Computer Application(BCA)'s degree at H. L. Patel College,
                Bhayavadar.
              </p>
              <p>
                Enthusiastic React Developer with a strong foundation in HTML,
                CSS and JavaScript. Skilled in building responsive web
                applications, working with REST APIs and creating clean,
                reusable components. Eager to apply my knowledge as a fresher
                and grow through real-world projects.
              </p>
              <div className="lang">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>CSS3</span>
                <span>HTML5</span>
              </div>
            </div>
          </div>
          <div className="about-cards">
            <div className="card">
              <div
                className="icon"
                onMouseEnter={handelrotate}
                onMouseLeave={handelleve}
              >
                <IoCode />
              </div>
              <h4>Clean Code</h4>
              <p>
                Writing maintainable, scalable code with best practices and
                modern technologies.
              </p>
            </div>
            <div className="card">
              <div
                className="icon"
                onMouseEnter={handelrotate}
                onMouseLeave={handelleve}
              >
                <RxLightningBolt />
              </div>
              <h4>Performance</h4>
              <p>
                Optimizing applications for speed, efficiency, and seamless user
                interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
