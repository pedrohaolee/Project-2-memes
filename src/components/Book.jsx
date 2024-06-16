import React, { useState } from "react";
import styles from "./Book.module.css";
import UpdateModal from "./UpdateModal";
const Book = (props) => {
  // const [showUpdateModal, setShowUpdateModal] = useState(false);
  // const deleteBook = async () => {
  //   const res = await fetch(
  //     import.meta.env.VITE_SERVER + "/lesson/books/" + props.id,
  //     { method: "DELETE", headers: { "Content-Type": "application/json" } }
  //   );
  //   if (!res.ok) {
  //     throw new Error("error deleting book");
  //   }
  //   props.getData();
  // };

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
      <div className={`row ${styles.book}`}>
        <div className="col-sm-3">{props.name}</div>
        <img className="col-sm-3" src={props.url} />
        <div className="col-sm-2">{props.height}</div>
        <div className="col-sm-2">{props.width}</div>
        <div className="col-sm-2"></div>
        {/* <button className="col-sm-2" onClick={() => setShowUpdateModal(true)}>
          update
        </button>
        <button className="col-sm-2" onClick={deleteBook}>
          delete
        </button> */}
      </div>
    </>
  );
};

export default Book;
