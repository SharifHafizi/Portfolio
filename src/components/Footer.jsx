import { useState, useEffect } from "react";
import countapi from "countapi-js";
import style from "./Footer.module.css";
import linkedin from "../assets/linked.png";
import insta from "../assets/insta.png";
import github from "../assets/github.png";
function Footer() {
  const [visitor, setVisitor] = useState();
  useEffect(() => {
    fetch("https://api.countapi.xyz/update/portfolio/kodehode/?amount= 1")
      .then((res) => res.json())
      .then((res) => {
        setVisitor(res.value);
      });
  }, []);

  return (
    <footer className={style.mainCon}>
      <p> &#169; 2023 Sharif Hafizi. All Rights Reserved.</p>
      <div className={style.footerlogo}>
        <h4>Connect</h4>
        <a
          href="https://www.linkedin.com/in/sharif-hafizi-21370b26b/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" width="40px" />
        </a>
        <a href="https://github.com/SharifHafizi" target="_blank">
          <img src={github} alt="github" width="40px" />
        </a>
        <a href="https://www.instagram.com/sharifhafizi/" target="_blank">
          <img src={insta} alt="insta" width="40px" />
        </a>
        <p>👁️{visitor}</p>
      </div>
    </footer>
  );
}

export default Footer;
