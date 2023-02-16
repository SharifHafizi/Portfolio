import style from "./Skill.module.css";
import figma from "./img-file/figma.png";
import java from "./img-file/javas.png";
import react from "./img-file/Reactbig.png";
import html from "./img-file/html.png";
import css from "./img-file/css.png";
import github from "./img-file/github4.png";
function Skills() {
  return (
    <div className={style.maincon}>
      <h1>02 My Skills</h1>
      <div className={style.white}></div>
      <div className={style.white}></div>
      <div className={style.white}></div>
      <div className={style.white}></div>

      <div className={style.white}></div>
      <div className={style.white}></div>
      <div className={style.white}></div>
      <div className={style.white}></div>

      <div className={style.white}></div>
      <div className={style.white}></div>
      <div className={style.white}></div>
      <div className={style.logo}>
        <div className={style.card1}>
          <img className={style.logo1} src={figma} alt="logo" width="120px" />
          <h2>Figma</h2>
        </div>

        <div className={style.card2}>
          <img className={style.logo2} src={java} alt="logo" width="120px" />
          <h2>Java Script</h2>
        </div>

        <div className={style.card3}>
          <img className={style.logo3} src={react} alt="logo" width="120px" />
          <h2>React</h2>
        </div>
        <div className={style.card4}>
          <img className={style.logo2} src={html} alt="logo" width="120px" />
          <h2>HTML</h2>
        </div>
        <div className={style.card5}>
          <img className={style.logo3} src={css} alt="logo" width="120px" />
          <h2>CSS</h2>
        </div>

        <div className={style.card2}>
          <img className={style.logo2} src={github} alt="logo" width="120px" />
          <h2>GitHub</h2>
        </div>
      </div>
    </div>
  );
}
export default Skills;
