import React from "react";
import styles from "./IntroStyle.module.css";

const Intro = () => {
  return (
    <div className="row">
      <div className={styles.introcontainer}>
        <h1 className={styles.introh1}>
          A meme is an idea, behavior, or style that spreads by means of
          imitation and often carries symbolic meaning representing a particular
          phenomenon or theme.
        </h1>
        <img
          src="https://static.wixstatic.com/media/b24c63_49605a9eef0a418f98622441d81e95fd~mv2.jpg/v1/fill/w_434,h_228,al_c,lg_1,q_80/b24c63_49605a9eef0a418f98622441d81e95fd~mv2.jpg"
          alt="meme culture"
        />
        <h1 className={styles.introh1}>
          This app API gets an array of 100 popular memes ordered by how many
          times they were captioned in the last 30 days. The app will randomly
          choose 30 out of the 100.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
