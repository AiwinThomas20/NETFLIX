import React, { useState, useEffect } from "react";
import "./Banner.css";
import Shimmer from "../Shimmer/Shimmer";
import { API_KEY, imageUrl } from "../../Constants";
import instance from "../../axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      instance
        .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          const randomIndex = Math.floor(
            Math.random() * response.data.results.length
          );
          setMovie(response.data.results[randomIndex]);
        });
    };

    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 7000); //

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return movie.length == 0 ? (
    <Shimmer />
  ) : (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${imageUrl + movie.backdrop_path})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie.title}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
