import React, { useEffect, useState } from "react";
import MemeCard from "../../Components/MemeCard";
import { getAllMemes } from "../../API/memes";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="row">
      {data.map((meme, index) => (
        <MemeCard key={index} img={meme.url} title={meme.name} />
      ))}
    </div>
  );
};

export default Home;
