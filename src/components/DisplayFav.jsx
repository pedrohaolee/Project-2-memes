import React, { useEffect, useRef, useState } from "react";
import BookFav from "./BookFav";
import styles from "./TopMemes.module.css";

const DisplayFav = () => {
  const [memesFav, setMemesFav] = useState([]);
  // let memeList = useRef([]);
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [year, setYear] = useState("");

  const getMemesFav = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_AIRTABLEGET, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
        },
      });
      if (!res.ok) {
        throw new Error("fetch fav memes error");
      }
      const data = await res.json();
      console.log("This is data");
      console.log(data.records);
      //   console.log(typeof data.fields);
      setMemesFav(data.records);
      // console.log("This is memes");
      // console.log(memes);
      // memeList = memes.data.memes;
      // console.log("This is memes list");
      // console.log(memeList[1]);
    } catch (err) {
      console.log(err.message);
    }
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
    getMemesFav();
  }, []);

  return (
    <div className={styles.topmemes}>
      {Array.isArray(memesFav) &&
        memesFav.map((item) => {
          return (
            <BookFav
              key={item.id}
              id={item.id}
              name={item.fields.Name}
              url={item.fields.Url}
              height={item.fields.Height}
              width={item.fields.Width}
              getMemesFav={getMemesFav}
            ></BookFav>
          );
        })}
    </div>
  );
};

export default DisplayFav;
