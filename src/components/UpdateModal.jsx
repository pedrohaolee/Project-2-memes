import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const OverLay = (props) => {
  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [year, setYear] = useState(props.yearPublished);

  const updateBook = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "/lesson/books/" + props.id,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, year, author }),
      }
    );
    if (!res.ok) {
      throw new Error("update error");
    }

    props.getData();
    props.setShowUpdateModal(false);
  };
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Title</div>
          <input
            type="text"
            className="col-md-3"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Author</div>
          <input
            type="text"
            className="col-md-3"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          ></input>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Year</div>
          <input
            type="text"
            className="col-md-3"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          ></input>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <button className="col-md-3" onClick={updateBook}>
            update
          </button>
          <button
            className="col-md-3"
            onClick={() => props.setShowUpdateModal(false)}
          >
            cancel
          </button>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

const UpdateModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          id={props.id}
          title={props.title}
          author={props.author}
          yearPublished={props.yearPublished}
          getData={props.getData}
          setShowUpdateModal={props.setShowUpdateModal}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UpdateModal;
