import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageURL } from "../../utilities";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => {
            return (
              <div key={index} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImageURL(skill.imageSrc)}
                    alt={`${skill.title}-logo`}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((history, index) => {
            return (
              <li key={index} className={styles.historyItem}>
                <img
                  src={getImageURL(history.imageSrc)}
                  alt={`${history.organization}-logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>
                    {history.role} | {history.organization}
                  </h3>
                  <p>
                    {history.startDate} - {history.endDate}
                  </p>
                  <ul>
                    {history.experiences.map((experience, index) => {
                      return <li key={index}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
