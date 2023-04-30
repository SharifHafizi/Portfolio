import style from "./Skill.module.css";
import figma from "./img-file/figma.png";
import java from "./img-file/javas.png";
import react from "./img-file/Reactbig.png";
import html from "./img-file/html.png";
import css from "./img-file/css.png";
import github from "./img-file/github.png";
import tailwind from "./img-file/tailwind.png";
import npm from "./img-file/npm.png";
import vsc from "./img-file/vsc.png";
import git from "./img-file/git.png";
import console from "./img-file/console1.png";
import typescript from "./img-file/Ts.png";

function Skills() {
  return (
    <main className={style.maincon}>
      <h1>My Skills</h1>
      {/* Blank divs for styling the page  */}
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
        <div className={style.card}>
          <img src={figma} alt="logo" />
          <h2>Figma</h2>
        </div>

        <div className={style.card}>
          <img src={java} alt="logo" />
          <h2>JS</h2>
        </div>

        <div className={style.card}>
          <img src={react} alt="logo" />
          <h2>React</h2>
        </div>

        <div className={style.card}>
          <img src={html} alt="logo" />
          <h2>HTML</h2>
        </div>

        <div className={style.card}>
          <img src={css} alt="logo" />
          <h2>CSS</h2>
        </div>

        <div className={style.card}>
          <img src={github} alt="logo" />
          <h2>GitHub</h2>
        </div>

        <div className={style.card}>
          <img src={tailwind} alt="logo" />
          <h2>Tailwind</h2>
        </div>

        <div className={style.card}>
          <img src={npm} alt="logo" />
          <h2>npm</h2>
        </div>

        <div className={style.card}>
          <img src={vsc} alt="logo" />
          <h2>VSC</h2>
        </div>

        <div className={style.card}>
          <img src={git} alt="logo" />
          <h2>git</h2>
        </div>

        <div className={style.card}>
          <img src={console} alt="logo" />
          <h2>Console</h2>
        </div>

        <div className={style.card}>
          <img src={typescript} alt="logo" />
          <h2>Type Script</h2>
        </div>
      </div>
    </main>
  );
}
export default Skills;
