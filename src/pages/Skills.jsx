import "../assets/css/Skills.css";

const Skills = () => {
  return (
    <>
      <div id="skills">
        <div className="subskill">
          <div className="heading">
            <h2>
              Skills & Technologies <br /> <div></div>
            </h2>

            <p>
              Here are the technologies and tools I work with to bring ideas in
              life
            </p>
          </div>
          <div className="detailes">
            <label htmlFor="html">
              HTML5 & CSS3
              <progress id="html" value={60} max={60} ></progress>
            </label>
            <label htmlFor="javascript">
              JavaScript
              <progress id="javascript" max={80}></progress>
            </label>
            <label htmlFor="reactjs">
              React JS
              <progress id="reactjs" max={90}></progress>
            </label>
            <label htmlFor="redux">
              Redux Toolkit
              <progress id="redux" max={60}></progress>
            </label>
            <label htmlFor="github">
              Github
              <progress id="github" max={60}></progress>
            </label>
            <label htmlFor="responsive">
              Responsive Design
              <progress id="responsive" max={60}></progress>
            </label>
          </div>
          <div className="tools">
            <h3>Tools & Platforms</h3>
            <div className="span">
              <span>VS Code</span>
              <span>Git</span>
              <span>Netlify</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
