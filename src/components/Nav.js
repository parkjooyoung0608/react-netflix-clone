import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "navBlack"}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png"
        className="navLogo"
        onClick={() => window.location.reload()}
      />
      <img
        alt="User logged"
        src={require("../images/login.png")}
        className="navAvatar"
      />
    </nav>
  );
};

export default Nav;
