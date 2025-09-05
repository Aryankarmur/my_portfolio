import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import "../assets/css/Navbar.css";
import { useRef, useState } from "react";

const Navbar = () => {
  const menu = useRef(null);
  const [close, setClose] = useState(false);

  const handelmenu = (e) => {
    if (menu.current.classList[0] == "responsivlinks") {
      menu.current.classList.add("none");
      menu.current.classList.remove("responsivlinks");
      setClose(false);
    } else {
      menu.current.classList.add("responsivlinks");
      menu.current.classList.remove("none");
      setClose(true);
    }
  };

  return (
    <>
      <nav>
        <div className="main">
          <div className="logo">
            <h1> .Aryan </h1>
          </div>
          <div className="navlinks">
            
              <button>Home</button>
              <button>About</button>
              <button>Skills</button>
              <button>Projects</button>
              <button>Contacts</button>
            
          </div>
          <button className="menu" onClick={handelmenu}>
            {close ? <IoClose /> : <IoMenu />}
          </button>
        </div>
        <div className="none" ref={menu}>
          <button>Home</button>
          <button>About</button>
          <button>Skills</button>
          <button>Projects</button>
          <button>Contacts</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
