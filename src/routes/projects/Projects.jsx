import style from "./Project.module.css";

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
            src="src\routes\projects\project-newyear.png"
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
                <img
                  src="src\routes\projects\githubSmal.png"
                  alt="github logo"
                  width="20px"
                />
              </button>
            </a>
          </div>
        </div>
        {/* Second Card */}
        <div className={style.containt}>
          <img
            className={style.projectImg}
            src="Portfolio\src\routes\projects\DrumKitJS.png"
            alt="projectlogo"
          />
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
                <img
                  src="src\routes\projects\githubSmal.png"
                  alt="github logo"
                  width="20px"
                />
              </button>
            </a>
          </div>
        </div>
        {/* Third Card */}
        <div className={style.containt}>
          <img
            className={style.projectImg}
            src="src\routes\projects\Solar-System-Project.png"
            alt="projectlogo"
          />
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
                <img
                  src="src\routes\projects\githubSmal.png"
                  alt="github logo"
                  width="20px"
                />
              </button>
            </a>
          </div>
        </div>
        {/* Fourth Card */}
        <div className={style.containt}>
          <img
            className={style.projectImg}
            src="src\routes\projects\DrumKitJS.png"
            alt="projectlogo"
          />
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
                <img
                  src="src\routes\projects\githubSmal.png"
                  alt="github logo"
                  width="20px"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
