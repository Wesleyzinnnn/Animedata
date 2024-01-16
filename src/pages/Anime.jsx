import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Anime = () => {
  const { mal_id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeById = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_ANIME_BY_ID}/${mal_id}/full`
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setAnime(data.data);
      } catch (error) {
        console.error("Error fetching anime:", error);
        setError("Error fetching anime data");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeById();
  }, [mal_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="p-3 bg-white border-b-2">
        <p className="text-xl font-bold">{anime.title}</p>
      </div>
      <div className="flex ">
        <div className="bg-white w-1/3 p-1">
          <div className="flex items-center justify-center">
            <div className="p-2">
              {anime && anime.images && anime.images.jpg && (
                <img src={anime.images.jpg.image_url} alt={anime.title} />
              )}
            </div>
          </div>

          <div className="border-t-2">
            <h2 className="font-bold">Titulos alternativos</h2>
            <p>Japonês: {anime.title_japanese}</p>
            <p>Sinônimos: {anime.title_synonyms}</p>
          </div>
          <div className="border-t-2">
            <h2 className="font-bold">Informacoes</h2>
            <p>Tipo:{anime.type}</p>
            <p>Episódios: {anime.episodes}</p>
            <p>Status: {anime.status}</p>
            <p>Estúdio: {anime.studios[0].name} </p>

            <p>
              Gênero:{" "}
              {anime.genres &&
                anime.genres.map((genre, index) => (
                  <span key={genre.mal_id}>
                    {index > 0 && ", "}
                    <a
                      href={genre.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {genre.name}
                    </a>
                  </span>
                ))}
              .
            </p>

            <p>Idade recomendada:{anime.rating}</p>
          </div>
          <div className="border-t-2 border-b-2">
            <h2 className="font-bold">Estatísticas</h2>
            <p>Score: {anime.score} </p>
            <p>Rank : {anime.rank} </p>
            <p>Popularidade: {anime.popularity}</p>
          </div>
        </div>
        <div className=" bg-white w-screen p-2 border-l-2">
          <div>
            <h1 className="font-bold text-lg border-b-2">Sinopse</h1>
            <p>{anime.synopsis}</p>
          </div>
          <div>
            <h2 className="font-bold text-lg border-b-2">Trailer:</h2>
            <div className="flex items-center justify-center p-4">
              <a href={anime.trailer.embed_url}>
                {" "}
                <img src={anime.trailer.images.maximum_image_url} alt="" />
              </a>
            </div>
          </div>
          <h1 className="font-bold text-lg border-b-2">Onde assistir: </h1>
          <div className="p-5">
            {anime.streaming && anime.streaming[0] && anime.streaming[0].url ? (
              <a href={anime.streaming[0].url}>
                <p className="text-blue-600">{anime.streaming[0].url}</p>
              </a>
            ) : (
              <p>404 Not found</p>
            )}
          </div>
          <div className="flex">
            <div className="w-[45%] mb-">
              <p className="font-bold border-b-2">Opening theme</p>
              <ul>
                {anime.theme.openings &&
                  anime.theme.openings.map((theme, index) => (
                    <li key={index}>{theme}</li>
                  ))}
              </ul>
            </div>
            <div className="w-[45%] ml-5">
              <p className="font-bold border-b-2">Ending theme</p>
              <div>
                <ul>
                  {anime.theme.endings &&
                    anime.theme.endings.map((theme, index) => (
                      <li key={index}>{theme}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anime;
