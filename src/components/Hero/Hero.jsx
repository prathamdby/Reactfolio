import React from "react";
import styles from "./Hero.module.css";
import { getImageURL } from "../../utilities";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ada</h1>
        <p className={styles.description}>
          I'm a full stack developer with five years of experience using
          React.js and Node.js. Reach out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:myemail@email.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageURL("hero/heroImage.png")}
        alt="hero-image"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
