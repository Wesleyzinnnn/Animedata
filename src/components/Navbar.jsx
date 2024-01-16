import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="bg-black text-white flex justify-between p-3 items-center">
      <h2>
        <Link to="/">
          <h1 className="text-xl text-red-700 font-bold w-full ">AnimeData</h1>
        </Link>
      </h2>

      <form onSubmit={handleSubmit} className="flex">
        <input
          className="rounded-sm w-full sm:w-80 mr-3 p-1.5 outline-none text-black "
          type="text"
          placeholder="Pesquisar anime"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></input>
        <button type="submit">
          <CiSearch size={30} />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
