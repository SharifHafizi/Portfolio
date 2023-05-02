import style from "./HomePage.module.css";
// style imported and module css used.
import newlogo3 from "../assets/newlogo3.png";
import Profile1 from "../images/Profile1.jpg";
// Imported logoes
import Typewriter from "typewriter-effect";
// Typewriter imported and installed.
import { css } from "@emotion/react";
import { GridLoader } from "react-spinners";
import { useState, useEffect } from "react";

function HomePage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div>
      {loading ? (
        <center className={style.loading}>
          <GridLoader
            cssOverride={override}
            size={20}
            color={"#FB923C"}
            loading={loading}
            speedMultiplier={0.5}
          />
          <br />
          <h4>Loading....</h4>
          <h3>Work Until You Succeed.</h3>
        </center>
      ) : (
        <main className={style.mainContainer}>
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
              {/* Type writer is an auto writing animation package which is installed through npm and imported inside JSX. the text would be written inside the strings */}
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: [
                    "WEB DEVELOPER & DESIGNER",
                    `<span style="color: rgb(249, 101, 47);">WORK WITH PASSION n LOVE</span>`,
                  ],
                }}
              />
            </h3>
            <img src={newlogo3} alt="logo" />
          </div>
          <div className={style.maintext2}>
            <div className={style.imgMainDiv}>
              <div className={style.imgDiv1}></div>
              <div className={style.imgDiv2}>
                <img src={Profile1} alt="logo" />
              </div>
            </div>

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
        </main>
      )}
    </div>
  );
}
export default HomePage;
