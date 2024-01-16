import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Cardanime from "../components/Cardanime";
const urlSearch = import.meta.env.VITE_SEARCH;

function Searchpage() {
  const [searchParams] = useSearchParams();
  const [animes, setAnimes] = useState([]);

  const query = searchParams.get("q");

  const getSearchAnimes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setAnimes(data.data);
  };

  useEffect(() => {
    const searchAnimesWithQuery = `${urlSearch}?q=${query}`;
    getSearchAnimes(searchAnimesWithQuery);
  }, [query]);

  return (
    <div className="bg-indigo-950">
      <h2 className="text-white text-center p-5 text-lg">
        Resultados para: <span className="text-red-800 font-bold">{query}</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        {animes.length > 0 &&
          animes.map((anime) => <Cardanime key={anime.mal_id} anime={anime} />)}
      </div>
    </div>
  );
}

export default Searchpage;
