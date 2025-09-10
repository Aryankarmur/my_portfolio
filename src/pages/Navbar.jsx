import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import "../assets/css/Navbar.css";

const Navbar = ({
  scrolltohome,
  scrolltoabout,
  scrolltoskills,
  scrolltoprojects,
  scrolltocontect,
}) => {
  const menu = useRef(null);
  const [close, setClose] = useState(false);
  const [scroll, setScroll] = useState(false);

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

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <>
      <nav>
        <div className={`main ${scroll ? "bg" : ""} `}>
          <div className="logo">
            <h1> .Aryan </h1>
          </div>
          <div className="navlinks">
            <button onClick={scrolltohome}>Home</button>
            <button onClick={scrolltoabout}>About</button>
            <button onClick={scrolltoskills}>Skills</button>
            <button onClick={scrolltoprojects}>Projects</button>
            <button onClick={scrolltocontect}>Contacts</button>
          </div>
          <button className="menu" onClick={handelmenu}>
            {close ? <IoClose /> : <IoMenu />}
          </button>
        </div>
        <div className="none" ref={menu}>
          <button onClick={scrolltohome}>Home</button>
          <button onClick={scrolltoabout}>About</button>
          <button onClick={scrolltoskills}>Skills</button>
          <button onClick={scrolltoprojects}>Projects</button>
          <button onClick={scrolltocontect}>Contacts</button>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
