import style from "./Skill.module.css";
import figma from "./img-file/figma.png";
import java from "./img-file/javas.png";
import react from "./img-file/Reactbig.png";
import html from "./img-file/html.png";
import css from "./img-file/css.png";
import github from "./img-file/github4.png";

//imported logos.
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skills() {
  const percentage = 66;
  return (
    <div className={style.maincon}>
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
          <img className={style.logo1} src={figma} alt="logo" />
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              background={true}
              value={91}
              text={`${91}%`}
              styles={{
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: "rgba(62, 152, 191)",
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Customize transition animation
                  transition: "stroke-dashoffset 0.9s ease 0.5s",
                  // Rotate the path
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: "#d6d6d6",
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Rotate the trail
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                // Customize the text
                text: {
                  // Text color
                  fill: "#f88",
                  // Text size
                  fontSize: "18px",
                  fontWeight: "700",
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: "#023047",
                },
              }}
            />
          </div>
          <h2>Figma</h2>
        </div>

        <div className={style.card}>
          <img className={style.logo2} src={java} alt="logo" />
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              value={73}
              text={`${73}%`}
              background={true}
              styles={{
                path: {
                  stroke: "rgba(62, 152, 191)",
                  strokeLinecap: "butt",
                  transition: "stroke-dashoffset 0.9s ease 0.5s",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                trail: {
                  stroke: "#d6d6d6",
                  strokeLinecap: "butt",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                text: {
                  fill: "#f88",
                  fontSize: "18px",
                  fontWeight: "700",
                },
                background: {
                  fill: "#023047",
                },
              }}
            />
          </div>
          <h2>JS</h2>
        </div>

        <div className={style.card}>
          <img className={style.logo3} src={react} alt="logo" />
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              value={86}
              text={`${86}%`}
              background={true}
              styles={{
                path: {
                  stroke: "rgba(62, 152, 191)",
                  strokeLinecap: "butt",
                  transition: "stroke-dashoffset 0.9s ease 0.5s",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                trail: {
                  stroke: "#d6d6d6",
                  strokeLinecap: "butt",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                text: {
                  fill: "#f88",
                  fontSize: "18px",
                  fontWeight: "700",
                },
                background: {
                  fill: "#023047",
                },
              }}
            />
          </div>
          <h2>React</h2>
        </div>

        <div className={style.card}>
          <img className={style.logo2} src={html} alt="logo" />
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              value={97}
              text={`${97}%`}
              background={true}
              styles={{
                path: {
                  stroke: "rgba(62, 152, 191)",
                  strokeLinecap: "butt",
                  transition: "stroke-dashoffset 0.9s ease 0.5s",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                trail: {
                  stroke: "#d6d6d6",
                  strokeLinecap: "butt",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                text: {
                  fill: "#f88",
                  fontSize: "18px",
                  fontWeight: "700",
                },
                background: {
                  fill: "#023047",
                },
              }}
            />
          </div>
          <h2>HTML</h2>
        </div>

        <div className={style.card}>
          <img className={style.logo3} src={css} alt="logo" />
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              value={95}
              text={`${95}%`}
              background={true}
              styles={{
                path: {
                  stroke: "rgba(62, 152, 191)",
                  strokeLinecap: "butt",
                  transition: "stroke-dashoffset 0.9s ease 0.5s",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                trail: {
                  stroke: "#d6d6d6",
                  strokeLinecap: "butt",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                text: {
                  fill: "#f88",
                  fontSize: "18px",
                  fontWeight: "700",
                },
                background: {
                  fill: "#023047",
                },
              }}
              v
            />
          </div>
          <h2>CSS</h2>
        </div>

        <div className={style.card}>
          <img className={style.logo2} src={github} alt="logo" />
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              value={90}
              text={`${90}%`}
              background={true}
              styles={{
                path: {
                  stroke: "rgba(62, 152, 191)",
                  strokeLinecap: "butt",
                  transition: "stroke-dashoffset 0.9s ease 0.5s",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                trail: {
                  stroke: "#d6d6d6",
                  strokeLinecap: "butt",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                text: {
                  fill: "#f88",
                  fontSize: "18px",
                  fontWeight: "700",
                },
                background: {
                  fill: "#023047",
                },
              }}
            />
          </div>
          <h2>GitHub</h2>
        </div>
      </div>
    </div>
  );
}
export default Skills;
