import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import mylogo from "../assets/mylogo.jpg";
function Navbar() {
  return (
    <div className={style.navContainer}>
      <div className={style.nameLogoContainer}>
        <Link to="/">
          <img src={mylogo} alt="logo" width="50px" height="50px" />
        </Link>
        <div className={style.name}>
          <h2>SHARIF HAFIZI</h2>
          <p>WEB DEVELOPER & DESIGNER</p>
        </div>
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
