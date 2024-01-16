import { Link } from "react-router-dom";

function Cardanime({ anime }) {
  return (
    <div
      className="m-5 w-64  bg-white  shadow-lg rounded-sm "
      key={anime.mal_id}
    >
      {
        <Link to={`/anime/${anime.mal_id}`}>
          <img
            className="rounded-t-sm"
            src={anime.images.jpg.image_url}
            alt={anime.title}
            style={{ minWidth: "256px", maxHeight: "320px" }}
          />
          <div className="h-20 flex items-center justify-around">
            <h2 className="pl-1">{anime.title}</h2>
            <h2 className="p-2 mr-3 bg-green-600 rounded-md text-white ">
              {anime.score}
            </h2>
          </div>
        </Link>
      }
    </div>
  );
}

export default Cardanime;
