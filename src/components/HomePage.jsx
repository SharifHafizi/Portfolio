import style from "./HomePage.module.css";
import newlogo3 from "../assets/newlogo3.png";
import newlogo2 from "../assets/newlogo2.png";
import Typewriter from "typewriter-effect";
function HomePage() {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.maintext}>
          <h1>
            I<span>'</span>M
          </h1>
          <h1>
            <span>SHARIF</span>
          </h1>
          <h1>
            HAFIZI<span>.</span>
          </h1>
          <h3>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ["WEB DEVELOPER & DESIGNER"],
              }}
            />
          </h3>

          <img src={newlogo3} alt="logo" width="183px" />
        </div>
        <div className={style.maintext2}>
          <img src={newlogo2} alt="logo" width="100px" />
          <h4>
            <span>&#60;</span> Brings ideas to life with code.
            <span>/&#62;</span>
          </h4>
          <p>
            <span>Hello,</span> I am a front end developer from Stavanger
            Norway. I enjoy building everything from small business sites to
            rich interactive web apps. If you are a business seeking a web
            presence or an employer looking to hire, I am here to help you.
          </p>
        </div>
      </div>
    </>
  );
}
export default HomePage;
