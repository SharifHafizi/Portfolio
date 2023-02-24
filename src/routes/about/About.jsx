import style from "./About.module.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import newlogo2 from "./img-file/newlogo2.png";
import img from "./img-file/colors.jpg";
import img2 from "./img-file/code.jpg";
import CV from "./img-file/My CV.docx.pdf";
const fadeProperties = {
  duration: 4000,
  transitionDuration: 800,
  infinite: true,
  indicators: false,
  arrows: false,
};
const Images = [img, img2, newlogo2];
function About() {
  return (
    <div className={style.main}>
      <div className={style.aboutme}>
        <h1>About Me</h1>
      </div>
      <div className={style.maincontent}>
        <div className={style.picture}>
          <Fade {...fadeProperties}>
            {Images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="picture"
                width="350px"
                height="400px"
              />
            ))}
          </Fade>
        </div>
        <div className={style.pitch}>
          <div className={style.rotate}>
            <h1>THIS.IS.ME</h1>

            <span>&#8212;</span>
          </div>

          <div className={style.pitchtext}>
            <h2>Pitch</h2>
            <p>
              <span>01&#8250;</span> My name is Sharif Hafizi. I am 26 years old
              and have lived in Norway since June 2021. I have lived in the USA
              following programming knowledge for a period of time before I
              moved to Norway. <br /> <br /> <span>02&#8250;</span> Right now I
              am attending Kodehode, a 1 year frontend developer course. I love
              problem solving and finding logical solutions.. When I was a child
              I always tried to fix my PC myself and then I became interested in
              learning more about computers and software, especially writing
              code. I find a lot of satisfaction and motivation in writing code
              and seeing it work as intended. Coding and working as a developer
              is very much something I can see myself doing professionally. I’m
              a firm believer in finding happiness through a job I love, and I
              feel that working as a software or web developer is the kind of
              field that actually inspires me to do so. <br /> <br />
              <span>03&#8250;</span> I also like to be active, social and
              healthy. I go to the gym almost every day and play volleyball in
              my spare time. Also doing brain exercise with writing code .
            </p>
            <a href={CV} download>
              <button className={style.cv}>Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
