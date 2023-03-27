import style from "./Contact.module.css";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser"; //Emailjs packaged install to make contac form dynamic.

import discordIcon from "./img-file/discord.png";
import githubIcon from "./img-file/githubSmal.png";
import gmail from "./img-file/gmail.png";
import linkedIn from "./img-file/In.png";
import twitter from "./img-file/twitter.png";

function Contact() {
  const [message, setMessage] = useState();
  const commentRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const fnameRef = useRef(null);
  const form = useRef();

  function handleClick(e) {
    e.preventDefault();
    // emailJs is used to send all data from contact form as an email.
    emailjs
      .sendForm(
        "service_zmwhhfw",
        "template_jzamnb3",
        form.current,
        "dUpSLyoC3HEqmJmaD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // Here conditional rendering will check if the validity is true then the function will clear all the form and response a submit message.
    if (commentRef.current.validity.valid && emailRef.current.validity.valid) {
      emailRef.current.value = "";
      commentRef.current.value = "";
      fnameRef.current.value = "";
      subjectRef.current.value = "";
      setMessage("Thanks for submitting.");
    }
  }

  return (
    <main className={style.maincon}>
      <div className={style.container}>
        <div className={style.leftcontainer}>
          <div className={style.leftconelement}>
            <img
              src="https://image.ibb.co/kUASdV/contact-image.png"
              alt="image"
            />
            <h2>Contact Me</h2>
            <h4>I would love to hear from you !</h4>
            <br />
            <div className={style.contacttext}>
              <div className={style.emoji}>☎</div>
              <a href="tel:+4793898381">
                <p>+4793898381</p>
              </a>
            </div>

            <div className={style.contacttext}>
              <div className={style.emoji}>&#64;</div>
              <p>Sharif.hafizi97@gmail.com</p>
            </div>

            <div className={style.contacttext}>
              <div className={style.emoji}>𖡡</div>
              <p>
                Langelandsstien 4B,4103,Jørpeland <br />
                Norway
              </p>
            </div>
          </div>
          <div className={style.contactlogo}>
            <a href="https://discord.com/channels/@me" target="_blank">
              <img src={discordIcon} alt="discord" />
            </a>
            <a href="https://github.com/SharifHafizi" target="_blank">
              <img src={githubIcon} alt="github" />
            </a>
            <a href="mailto:sharif.hafizi97@gmail.com" target="_blank">
              <img src={gmail} alt="gmail" />
            </a>
            <img src={linkedIn} alt="in" />

            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className={style.rightcontainer}>
          <h4>Feel free to drop me a line below!</h4>
          <div className={style.rightconelement}>
            <form onSubmit={(e) => handleClick(e)} type="submit" ref={form}>
              <label className={style.labelel} for="fname">
                Name:<span>*️</span>
              </label>
              <br />
              <input
                type="text"
                class={style.labelinput}
                id="fname"
                placeholder="Name"
                name="user_name"
                required
                ref={fnameRef}
              />

              <br />
              <label class={style.labelel} for="email">
                Email:<span>*️</span>
              </label>
              <br />
              <input
                type="email"
                class={style.labelinput}
                id="email"
                placeholder="Email"
                name="user_email"
                required
                ref={emailRef}
              />
              <br />
              <label class={style.labelel} for="subject">
                Subject:<span>*️</span>
              </label>
              <br />
              <input
                type="text"
                className={style.labelinput}
                id="subject"
                placeholder="Subject"
                name="user_subject"
                required
                ref={subjectRef}
              />
              <br />
              <label className={style.labelel} for="comment">
                Message:<span>*️</span>
              </label>
              <br />
              <textarea
                type="text"
                id="comment"
                name="user_msg" //To get the info and send it to email.
                className={style.labelinput}
                required
                ref={commentRef} //To clear the form
              ></textarea>
              <br />
              <div className={style.submitText}>
                <button name="contact_btn" type="submit" className={style.btn}>
                  Submit &#8594;
                </button>
                <h3>{message}</h3>
                {/*  After submiting form and checking all conditions are true message will render. */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Contact;
