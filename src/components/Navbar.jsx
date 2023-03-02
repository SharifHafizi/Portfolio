import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";
import "./Sidebar.css";
import style from "./Navbar.module.css";
import mylogo from "../assets/mylogo.jpg";
function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={style.navContainer}>
      <div className={style.nameLogoContainer}>
        <Link to="/">
          <img src={mylogo} alt="logo" />
        </Link>
        <div className={style.name}>
          <h2>SHARIF HAFIZI</h2>
          <p>WEB DEVELOPER & DESIGNER</p>
        </div>
      </div>

      <div id="hamburgerMenu" className={style.hamburger}>
        <div className={style.burger}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            easing="ease-in"
            size={25}
          />
        </div>
        {isOpen && (
          <div className="sidebar">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/projects">
                <li>Projects</li>
              </Link>
              <Link to="/skills">
                <li>Skills</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>

      <div className={style.menuContainer}>
        <Link to="/" className={style.link}>
          <span>HOME</span>
        </Link>
        <Link to="/projects" className={style.link}>
          PROJECTS
        </Link>
        <Link to="/skills" className={style.link}>
          SKILLS
        </Link>
        <Link to="/about" className={style.link}>
          ABOUT
        </Link>
        <Link to="/contact" className={style.link}>
          CONTACT
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
