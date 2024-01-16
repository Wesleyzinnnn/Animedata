import { useState, useEffect } from "react";
import Cardanime from "./Cardanime";

const aniSeason = import.meta.env.VITE_ANIME_SEASON;

function Seasonanimes() {
  const [topAnimes, setTopAnimes] = useState([]);

  const getTopAnimes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopAnimes(data.data);
  };

  useEffect(() => {
    const getTopUrl = `${aniSeason}`;
    getTopAnimes(getTopUrl);
  }, []);

  return (
    <div
      className="flex overflow-x-scroll min-h-full"
      style={{ scrollBehavior: "smooth" }}
    >
      {topAnimes.map((anime) => (
        <Cardanime key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}

export default Seasonanimes;
