import React from "react";
import styles from "./Book.module.css";

const BookFav = (props) => {
  console.log(props.id);
  return (
    <>
      <div className={`row ${styles.book}`}>
        <div className="col-sm-3">{props.id}</div>
        {/* <img className="col-sm-3" src={props.url} />
        <div className="col-sm-2">{props.height}</div>
        <div className="col-sm-2">{props.width}</div> */}
        {/* <div className="col-sm-2"></div> */}
        {/* <button className="col-sm-2" onClick={() => setShowUpdateModal(true)}>
              update
            </button> */}
        {/* <button className="col-sm-2" onClick={favMeme}>
              favorite
            </button> */}
      </div>
    </>
  );
};

export default BookFav;
