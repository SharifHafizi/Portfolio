import style from "./Skill.module.css";
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
          <hr />
          <img
            className={style.logo1}
            src="src\routes\skills\figma.png"
            alt="logo"
            width="100px"
          />
        </div>

        <div className={style.card2}>
          <hr />
          <img
            className={style.logo2}
            src="src\routes\skills\javas.png"
            alt="logo"
            width="100px"
          />
        </div>
        <div className={style.card3}>
          <hr />
          <img
            className={style.logo3}
            src="src\routes\skills\Reactbig.png"
            alt="logo"
            width="100px"
          />
        </div>
        <div className={style.card4}>
          <hr />
          <img
            className={style.logo2}
            src="src\routes\skills\html.png"
            alt="logo"
            width="100px"
          />
        </div>
        <div className={style.card5}>
          <hr />
          <img
            className={style.logo3}
            src="src\routes\skills\css.png"
            alt="logo"
            width="100px"
          />
        </div>
      </div>
    </div>
  );
}
export default Skills;
