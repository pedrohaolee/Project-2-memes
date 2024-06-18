import React from "react";
import styles from "./IntroStyle.module.css";

const Intro = () => {
  return (
    <div className="row">
      <div className={styles.introcontainer}>
        <h1 className={styles.introh1}>
          Gets an array of popular memes that may be captioned with the API. The
          API returned 100 memes ordered by how many times they were captioned
          in the last 30 days. The app will randomly choose 20 out of the 100.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
