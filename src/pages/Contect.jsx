import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
//
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
//
import "../assets/css/Contect.css";

const Contect = () => {
  const my_info = [
    {
      image: <MdMailOutline />,
      title: "Email",
      href: "mailto:aryankaramur@gmail.com",
      dis_data: "aryankaramur@gmail.com",
      target: "_blank",
    },
    {
      image: <LuPhone />,
      title: "Phone",
      href: "tel:6352481426",
      dis_data: "+91 6352481426",
      target: "_blank",
    },
    {
      image: <IoLocationOutline />,
      title: "Location",
      href: "",
      dis_data: "Butavadar, Jamnagar(Gujarat)",
      target: "",
    },
  ];

  const infobanner = my_info.map((detail) => {
    return (
      <div className="mainconnect">
        <div className="image">{detail.image}</div>
        <div className="info">
          <p> {detail.title} </p>
          <a href={detail.href} target={detail.target}>
            {detail.dis_data}
          </a>
        </div>
      </div>
    );
  });

  return (
    <div id="contect" >
      <div className="subcontect">
        <div className="contect-heading">
          <h2>
            Get In Touch <br /> <div></div>
          </h2>
          <p>
            I'm always open to discussing new opportunities, creative projects,
            or just having a chat about technology.
          </p>
        </div>
        <div className="contect-detail">
          <h3>Let's connect</h3>
          <div className="connect">{infobanner}</div>
        </div>
        

        <footer>
          <div className="subfooter">
            <div className="details">
              <p>Aryan Karmur</p>
              <p>React js & Frontend Developer</p>
            </div>
            <div className="links">
              <a href="https://github.com/Aryankarmur" target="_blank">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/aryankaramur/" target="_blank">
                <SlSocialLinkedin />
              </a>
              <a href="mailto:aryankaramur@gmail.com" target="_blank">
                <MdMailOutline />
              </a>
            </div>
          </div>

          <p className="copyright">
            &#169; 2025 Aryan Karmur. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Contect;
