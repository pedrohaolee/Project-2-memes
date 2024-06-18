import React, { useEffect, useRef, useState } from "react";
import Book from "./Book";
import styles from "./TopMemes.module.css";

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
      const selectedMemes = selectRandomMemes(data.data.memes, 30);
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

  // const favMeme = async () => {
  //   try {
  //     const res = await fetch(import.meta.env.VITE_AIRTABLE, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${meta.env.VITE_APIKEY}`,
  //       },
  //       body: JSON.stringify({
  //         records: [
  //           {
  //             fields: {
  //               Name: "Laughing Leo",
  //               Url: "https://i.imgflip.com/4acd7j.png",
  //               Height: 640,
  //               Width: 1200,
  //             },
  //           },
  //           {
  //             fields: {
  //               Name: "Domino Effect",
  //               Url: "https://i.imgflip.com/2oo7h0.jpg",
  //               Height: 640,
  //               Width: 1200,
  //             },
  //           },
  //         ],
  //       }),
  //     });

  //     if (!res.ok) {
  //       throw new Error("fav meme error");
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  useEffect(() => {
    getMemes();
  }, []);

  return (
    <div className={styles.topmemes}>
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
