import React from "react";
import styles from "./IntroStyle.module.css";

const Intro = () => {
  return (
    <div className="row">
      <div className={styles.introcontainer}>
        <img
          src="https://static.wixstatic.com/media/b24c63_49605a9eef0a418f98622441d81e95fd~mv2.jpg/v1/fill/w_434,h_228,al_c,lg_1,q_80/b24c63_49605a9eef0a418f98622441d81e95fd~mv2.jpg"
          alt="meme culture"
        />
        <h1 className={styles.introh1}>
          Gets an array of popular memes that may be captioned with the API. The
          API returned 100 memes ordered by how many times they were captioned
          in the last 30 days. The app will randomly choose 30 out of the 100.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
