import React, { useState } from "react";
import styles from "./TopMemes.module.css";
import UpdateModal from "./UpdateModal";
const Book = (props) => {
  // const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const favMeme = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_AIRTABLE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: props.name,
                Url: props.url,
                Height: props.height,
                Width: props.width,
              },
            },
          ],
        }),
      });

      setIsFav(true);

      if (!res.ok) {
        throw new Error("fav meme error");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {/* {showUpdateModal && (
        <UpdateModal
          id={props.id}
          title={props.title}
          author={props.author}
          getData={props.getData}
          setShowUpdateModal={setShowUpdateModal}
        ></UpdateModal>
      )} */}
      {/* <div className={`row ${styles.book}`}>
        <div className="col-sm-3">{props.name}</div>
        <img className="col-sm-3" src={props.url} /> */}
      <div className={styles.memecard}>
        <div className={styles.memetitle}>{props.name}</div>
        <img className={styles.memeimage} src={props.url} alt={props.name} />
        {/* <div className="col-sm-2">{props.height}</div>
        <div className="col-sm-2">{props.width}</div>
        <div className="col-sm-2"></div> */}
        {/* <button className="col-sm-2" onClick={() => setShowUpdateModal(true)}>
          update
        </button> */}
        <button className={styles.favoritebutton} onClick={favMeme}>
          {isFav ? <span>&#10003; Favorite</span> : <span>Favorite</span>}
        </button>
      </div>
    </>
  );
};

export default Book;
