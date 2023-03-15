import style from "./Footer.module.css";
import linkedin from "../assets/linked.png";
import insta from "../assets/insta.png";
import github from "../assets/github.png";
function Footer() {
  return (
    <footer className={style.mainCon}>
      <p> &#169; 2023 Sharif Hafizi. All Rights Reserved.</p>
      <div className={style.footerlogo}>
        <h3>Connect</h3>
        <a href="">
          <img src={linkedin} alt="" linkedin width="45px" />
        </a>
        <a href="https://github.com/SharifHafizi">
          <img src={github} alt="github" width="45px" />
        </a>
        <a href="https://www.instagram.com/sharifhafizi/">
          <img src={insta} alt="insta" width="45px" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
