import { useEffect, useState } from "react";
import { CarouselElement } from "../components/CarouselElement";
import Cardanime from "../components/Cardanime";
import Seasonanimes from "../components/Seasonanimes";

const topAni = import.meta.env.VITE_TOP;

function Homepage() {
  const [topAnimes, setTopAnimes] = useState([]);

  let slides = [
    "https://images7.alphacoders.com/132/1329444.jpg",
    "https://images2.alphacoders.com/134/1346492.png",
    "https://images2.alphacoders.com/742/742320.png",
    "https://images.alphacoders.com/609/609602.png",
    "https://images.alphacoders.com/747/747115.png",
    "https://picfiles.alphacoders.com/543/543548.png",
  ];

  const getTopAnimes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopAnimes(data.data);
  };

  useEffect(() => {
    const getTopUrl = `${topAni}`;

    const timeoutId = setTimeout(() => {
      getTopAnimes(getTopUrl);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className=" w-[95%] m-auto mt-5  ">
        <CarouselElement slides={slides} />
      </div>

      <div>
        <p className="text-xl text-white mt-5 ml-5">
          Animes mais bem avaliados
        </p>
        <div
          className="flex overflow-x-scroll"
          style={{ scrollBehavior: "smooth" }}
        >
          {Array.isArray(topAnimes) &&
            topAnimes.map((anime) => (
              <Cardanime key={anime.mal_id} anime={anime} />
            ))}
        </div>
        <p className="text-xl text-white mt-5 ml-5 ">Animes nova temporada</p>
        <Seasonanimes />
      </div>
    </div>
  );
}

export default Homepage;
