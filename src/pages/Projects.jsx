import minimart from "../assets/images/minimart.png";
import meghdarshan from "../assets/images/meghdarshan.png";
import todoapp from "../assets/images/todo.png";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import "../assets/css/Projects.css";

const projects = [
  {
    alt: "minimart app image",
    title: "Mini Mart",
    img: minimart,
    desc: " An E-Commerce app build with React, featuring DummyJson API for dynamic product listing.",
    tech: ["React", "CSS", "DummyJson API", "Local Storage"],
    code_link: "https://github.com/Aryankarmur/mini_mart",
    live_link: "https://mini-mart-bajar.netlify.app/",
  },
  {
    alt: "meghdarshan app image",
    title: "Meghdarshan",
    img: meghdarshan,
    desc: " An Weather forecasting app build with React, featuring Geocoding API for get long and lat, and open-meteo API for weather forecast.",
    tech: ["React", "CSS", "Open-meteo API", "Geocoding API"],
    code_link: "https://github.com/Aryankarmur/meghadarshan",
    live_link: "https://meghadarshan.netlify.app/",
  },
  {
    alt: "todo app image",
    title: "Todo app",
    img: todoapp,
    desc: " An Todo app build with React and Redux-toolkit, to list daily task and user can delete or edit task, store data using localstorage.",
    tech: ["React", "CSS", "Redux-toolkit", "Local Storage"],
    code_link: "https://github.com/Aryankarmur/todo_app",
    live_link: "https://todoapp-by-aryan.netlify.app/",
  },
];

const all_projects = projects.map((project) => {
  return (
    <div className="info">
      <div className="img">
        <img src={project.img} alt={project.alt} loading="lazy" />
        <div className="link">
          <a href={project.code_link} target="_blank">
            <FiGithub />
          </a>
          <a href={project.live_link} target="_blank">
            {" "}
            <FiExternalLink />{" "}
          </a>
        </div>
      </div>
      <div className="detailes">
        <h3> {project.title} </h3>
        <p className="description">{project.desc}</p>
        <p className="technologies">
          {project.tech.map((techno) => {
            return <span> {techno} </span>;
          })}
        </p>
        <p className="links">
          <a href={project.code_link} target="_blank">
            <span>
              <FiGithub /> Code
            </span>
          </a>
          <a href={project.live_link} target="_blank">
            <span>
              <FiExternalLink /> Live Demo
            </span>
          </a>
        </p>
      </div>
    </div>
  );
});

const Projects = () => {
  return (
    <>
      <div id="projects">
        <div className="subprojects">
          <div className="project-heading">
            <h2>
              Featured Projects <br /> <div></div>
            </h2>

            <p>
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </div>
          <div className="project-detailes">{all_projects}</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
