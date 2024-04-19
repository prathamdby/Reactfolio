import React from "react";
import styles from "./Contact.module.css";
import { getImageURL } from "../../utilities";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="email-icon" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="linkedin-icon"
          />
          <a href="https://linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="github-icon" />
          <a href="https://github.com/myname">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
