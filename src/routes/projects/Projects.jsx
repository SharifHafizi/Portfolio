import style from "./Project.module.css";
import githublogo from "./img-file/githubSmal.png";
import NewyearProjet from "./img-file/project-newyear.png";
import DrumKitJS from "./img-file/DrumKitJS.png";
import SSP from "./img-file/Solar-System-Project.png";
import pokedex from "./img-file/Pokedex.png";
import CSS3D from "./img-file/CSS-3D.png";
import RandomPass from "./img-file/RandomPass.png";
import converter from "./img-file/converter.png";
// images imported for the projects cards.
function Projects() {
  return (
    <main className={style.maincon}>
      <h1> My Projects</h1>
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
            New year counter project. This project were made with JS and React
            with some CSS.
          </p>

          <div className={style.buttons}>
            <a
              href="https://sharifhafizi.github.io/Christmas-Countdown/"
              target="_blank"
            >
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a
              href="https://github.com/SharifHafizi/Christmas-Countdown.git"
              target="_blank"
            >
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="22%" />
              </button>
            </a>
          </div>
        </div>
        {/* Second Card */}
        <div className={style.containt}>
          <img className={style.projectImg} src={DrumKitJS} alt="projectlogo" />
          <p>
            Drumkit Project which is purely made with javaScript. It works very
            fine and is ready to use as tablets or mobile apps. Internal CSS
            applied.
          </p>

          <div className={style.buttons}>
            <a
              href="https://sharifhafizi.github.io/Drum-Kit-JS/"
              target="_blank"
            >
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a
              href="https://github.com/SharifHafizi/Drum-Kit-JS.git"
              target="_blank"
            >
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="22%" />
              </button>
            </a>
          </div>
        </div>
        {/* Third Card */}
        <div className={style.containt}>
          <img className={style.projectImg} src={SSP} alt="projectlogo" />
          <p>
            Solar system projetcs which is purely made just with HTML and CSS.
            It was my first project after learning html and css.
          </p>

          <div className={style.buttons}>
            <a
              href="https://sharifhafizi.github.io/space-project-main/"
              target="_blank"
            >
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a
              href="https://github.com/SharifHafizi/space-project-main"
              target="_blank"
            >
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="22%" />
              </button>
            </a>
          </div>
        </div>
        {/* Fourth Card */}
        <div className={style.containt}>
          <img className={style.projectImg} src={pokedex} alt="projectlogo" />
          <p>
            Pokedex projects is maded with JS and CSS. In this project we
            learned how to use API and fetch data.
          </p>

          <div className={style.buttons}>
            <a
              href="https://sharifhafizi.github.io/Api-Pokedex/"
              target="_blank"
            >
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a
              href="https://github.com/SharifHafizi/Api-Pokedex"
              target="_blank"
            >
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="22%" />
              </button>
            </a>
          </div>
        </div>
        {/* Fifth Card */}
        <div className={style.containt}>
          <img className={style.projectImg} src={CSS3D} alt="projectlogo" />
          <p>
            This is a 3D image veiwer with animation which is purely made in
            CSS.
          </p>

          <div className={style.buttons}>
            <a href="https://sharifhafizi.github.io/CSS-3D/" target="_blank">
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a href="https://github.com/SharifHafizi/CSS-3D" target="_blank">
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="22%" />
              </button>
            </a>
          </div>
        </div>
        {/* Sixth Card */}
        <div className={style.containt}>
          <img
            className={style.projectImg}
            src={RandomPass}
            alt="projectlogo"
          />
          <p>
            This Project is made in JS and CSS which generate strong password
            for the user safety.
          </p>

          <div className={style.buttons}>
            <a
              href="https://sharifhafizi.github.io/Random-pass/"
              target="_blank"
            >
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a
              href="https://github.com/SharifHafizi/Random-pass"
              target="_blank"
            >
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="22%" />
              </button>
            </a>
          </div>
        </div>
        {/* Seventh Card */}
        <div className={style.containt}>
          <img className={style.projectImg} src={converter} alt="projectlogo" />
          <p>
            This Project is made in JS and CSS which converts different unites.
          </p>

          <div className={style.buttons}>
            <a
              href="https://sharifhafizi.github.io/Unit-converter/"
              target="_blank"
            >
              <button className={style.button1}>
                Live <span>&#8227;</span>
              </button>
            </a>

            <a
              href="https://github.com/SharifHafizi/Unit-converter"
              target="_blank"
            >
              <button className={style.button2}>
                Github
                <img src={githublogo} alt="github logo" width="22%" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <p>
        For more projects please visit here{" "}
        <a href="https://github.com/SharifHafizi" target="_blank">
          <span> &#8594;</span>
        </a>
      </p>
    </main>
  );
}
export default Projects;
