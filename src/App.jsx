import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-indigo-950  ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
