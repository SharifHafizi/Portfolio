import style from "./Project.module.css";
import githublogo from "./img-file/githubSmal.png";
import NewyearProjet from "./img-file/project-newyear.png";
import DrumKitJS from "./img-file/DrumKitJS.png";
import SSP from "./img-file/Solar-System-Project.png";
import pokedex from "./img-file/Pokedex.png";

function Projects() {
  return (
    <div className={style.maincon}>
      <h1>My Projects</h1>
      <hr />

      <div className={style.cards}>
        {/* First Card */}
        <div className={style.containt}>
          <img
            className={style.projectImg}
            src={NewyearProjet}
            alt="projectlogo"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nobis
            corporis, rerum quod veniam accusantium
          </p>

          <div className={style.buttons}>
            <a href="https://sharifhafizi.github.io/Christmas-Countdown/">
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a href="https://github.com/SharifHafizi/Christmas-Countdown.git">
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="20px" />
              </button>
            </a>
          </div>
        </div>
        {/* Second Card */}
        <div className={style.containt}>
          <img className={style.projectImg} src={DrumKitJS} alt="projectlogo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nobis
            corporis, rerum quod veniam accusantium
          </p>

          <div className={style.buttons}>
            <a href="https://sharifhafizi.github.io/Drum-Kit-JS/">
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a href="https://github.com/SharifHafizi/Drum-Kit-JS.git">
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="20px" />
              </button>
            </a>
          </div>
        </div>
        {/* Third Card */}
        <div className={style.containt}>
          <img className={style.projectImg} src={SSP} alt="projectlogo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nobis
            corporis, rerum quod veniam accusantium
          </p>

          <div className={style.buttons}>
            <a href="https://sharifhafizi.github.io/space-project-main/">
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a href="https://github.com/SharifHafizi/space-project-main">
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="20px" />
              </button>
            </a>
          </div>
        </div>
        {/* Fourth Card */}
        <div className={style.containt}>
          <img className={style.projectImg} src={pokedex} alt="projectlogo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nobis
            corporis, rerum quod veniam accusantium
          </p>

          <div className={style.buttons}>
            <a href="https://sharifhafizi.github.io/Api-Pokedex/">
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a href="https://github.com/SharifHafizi/Api-Pokedex">
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="20px" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
