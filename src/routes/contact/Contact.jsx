import style from "./Contact.module.css";
import { useState } from "react";
import { useRef } from "react";

import discordIcon from "./discord.png";

function Contact() {
  const [message, setMessage] = useState();
  const commentRef = useRef(null);
  const emailRef = useRef(null);
  const lnameRef = useRef(null);
  const fnameRef = useRef(null);

  function handleClick(e) {
    e.preventDefault();

    if (commentRef.current.validity.valid && emailRef.current.validity.valid) {
      emailRef.current.value = "";
      commentRef.current.value = "";
      fnameRef.current.value = "";
      lnameRef.current.value = "";
      setMessage("Thanks for submitting.");
    }
  }

  return (
    <div className={style.maincon}>
      <div className={style.container}>
        <div className={style.leftcontainer}>
          <div className={style.leftconelement}>
            <img
              src="https://image.ibb.co/kUASdV/contact-image.png"
              alt="image"
            />
            <h2>Contact Me</h2>
            <h4>
              I would love to hear from you ! <br />
            </h4>
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
            <a href="https://discord.com/channels/@me">
              <img src={discordIcon} alt="discord" />
            </a>
            <a href="https://github.com/SharifHafizi">
              <img src="src\routes\contact\githubSmal.png" alt="github" />
            </a>
            <a href="mailto:sharif.hafizi97@gmail.com">
              <img src="src\routes\contact\gmail.png" alt="gmail" />
            </a>
            <img src="src\routes\contact\In.png" alt="in" />

            <img src="src\routes\contact\twitter.png" alt="twitter" />
          </div>
        </div>
        <div className={style.rightcontainer}>
          <h4>Feel free to drop me a line below!</h4>
          <div className={style.rightconelement}>
            <form onSubmit={(e) => handleClick(e)} type="submit">
              <label className={style.labelel} for="fname">
                First Name:<span>*️</span>
              </label>
              <br />
              <input
                type="text"
                class={style.labelinput}
                id="fname"
                placeholder="Enter First Name"
                name="fname"
                required
                ref={fnameRef}
              />
              <br />
              <label class={style.labelel} for="lname">
                Last Name:
              </label>
              <br />
              <input
                type="text"
                className={style.labelinput}
                id="lname"
                placeholder="Enter Last Name"
                name="lname"
                ref={lnameRef}
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
                placeholder="Enter email"
                name="email"
                required
                ref={emailRef}
              />
              <br />
              <label className={style.labelel} for="comment">
                Message:<span>*️</span>
              </label>
              <br />
              <textarea
                type="text"
                id="comment"
                name="comment"
                className={style.labelinput}
                required
                ref={commentRef}
              ></textarea>
              <br />
              <div className={style.submitText}>
                <button type="submit" className={style.btn}>
                  Submit &#8594;
                </button>
                <h3>{message}</h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
