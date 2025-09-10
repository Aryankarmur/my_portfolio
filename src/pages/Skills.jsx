import "../assets/css/Skills.css";

const Skills = () => {
  const skills_detailes = [
    {
      title: "HTML5 & CSS3",
      progress: "94%",
      bg_color:
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(214,40,40,1) 0%, rgba(196, 168, 79, 1) 90% )",
      ball_bg: "red",
    },
    {
      title: "JavaScript",
      progress: "85%",
      bg_color:
        " radial-gradient( circle 994px at 0.2% 51.2%,  rgba(43, 117, 226, 1) 0%, rgba(55, 248, 84, 1) 100.2% )",
      ball_bg: "red",
    },
    {
      title: "React JS",
      progress: "90%",
      bg_color:
        " linear-gradient( 45.8deg,  rgba(175,104,254,1) 9.3%, rgba(82, 200, 230, 1) 75.1% )",
      ball_bg: "red",
    },
    {
      title: "Redux Toolkit",
      progress: "68%",
      bg_color:
        "radial-gradient( circle 614px at -0.6% 47%,  rgba(248, 144, 74, 1) 0%, rgba(76, 117, 240, 1) 100.4% )",
      ball_bg: "red",
    },
    {
      title: "Github",
      progress: "72%",
      bg_color:
        "linear-gradient( 178.2deg,  rgba(79, 39, 255, 1) 3.6%, rgba(117, 200, 221, 1) 101.6% )",
      ball_bg: "red",
    },
    {
      title: "Responsive Design",
      progress: "80%",
      bg_color:
        "linear-gradient( 109.6deg,  rgba(95, 130, 247, 1) 11.3%, rgba(3, 156, 156, 1) 86.7% )",
      ball_bg: "red",
    },
  ];

  const skills = skills_detailes.map((skill) => {
    return (
      <div className="progres-main">
        <div className="progres-info">
          <span>{skill.title}</span>
          <span>{skill.progress}</span>
        </div>
        <div className="progres">
          <div
            className="sub-progres"
            style={{ background: skill.bg_color, width: skill.progress }}
          >
            <div
              className="child-progres"
              style={{ background: skill.bg_color }}
            ></div>
          </div>
        </div>
      </div>
    );
  });

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

          <div className="detailes">{skills}</div>
          
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
