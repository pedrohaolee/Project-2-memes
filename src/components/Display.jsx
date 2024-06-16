import React, { useEffect, useRef, useState } from "react";
import Book from "./Book";

const Display = () => {
  const [memes, setMemes] = useState([]);
  // let memeList = useRef([]);
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [year, setYear] = useState("");

  const getMemes = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER);
      if (!res.ok) {
        throw new Error("fetch memes error");
      }
      const data = await res.json();
      // console.log("This is data");
      // console.log(memes);
      const selectedMemes = selectRandomMemes(data.data.memes, 3);
      setMemes(selectedMemes);
      // console.log("This is memes");
      // console.log(memes);
      // memeList = memes.data.memes;
      // console.log("This is memes list");
      // console.log(memeList[1]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const selectRandomMemes = (memesArray, count) => {
    const shuffledMemes = memesArray.sort(() => 0.5 - Math.random());
    return shuffledMemes.slice(0, count);
  };

  const favMeme = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER + "/lesson/books", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, year, author }),
      });

      if (!res.ok) {
        throw new Error("add meme error");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMemes();
  }, []);

  return (
    <div className="container">
      <h1>Meme List</h1>
      <div className="row">
        <button className="col-md-3" onClick={favMeme}>
          Add
        </button>
      </div>
      <div className="row">
        <div className="col-md-3">Memes</div>
      </div>
      {Array.isArray(memes) &&
        memes.map((item) => {
          return (
            <Book
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
              height={item.height}
              width={item.width}
            ></Book>
          );
        })}
    </div>
  );
};

export default Display;