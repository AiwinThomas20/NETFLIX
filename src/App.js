import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originals, actionMovies, horrorMovies, romanceMovies } from "./urls";

import "./App.css";
const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={actionMovies} title="Action Movies" />
      <RowPost url={horrorMovies} title="Horror Movies" />
      <RowPost url={romanceMovies} title="Romance Movies" />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
