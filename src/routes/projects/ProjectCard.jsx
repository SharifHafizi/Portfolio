import style from "./Project.module.css";
function ProjectCard({ image, des, live, github, gitlogo }) {
  return (
    <div className={style.containt}>
      <img className={style.projectImg} src={image} alt="projectlogo" />
      <p>{des}</p>

      <div className={style.buttons}>
        <a href={live} target="_blank">
          <button className={style.button1}>
            Live <span>&#8227;</span>
          </button>
        </a>

        <a href={github} target="_blank">
          <button className={style.button2}>
            Github
            <img src={gitlogo} alt="github logo" width="22%" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
