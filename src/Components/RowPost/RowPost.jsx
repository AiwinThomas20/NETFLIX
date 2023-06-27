import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import "./RowPost.css";
import { imageUrl } from "../../Constants";
import { API_KEY } from "../../Constants";
import instance from "../../axios";

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    instance.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const playTrailer = (id) => {
    instance
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setVideoId(response.data.results[0]);
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <div className="movie-container" key={obj.id}>
            <img
              onClick={() => playTrailer(obj.id)}
              className="poster"
              src={`${imageUrl + obj.backdrop_path}`}
              alt={obj.name || obj.title}
            />
            <h4>{obj.name}</h4>
            <h4>{obj.title}</h4>
          </div>
        ))}
      </div>
      {videoId && <Youtube opts={opts} videoId={videoId.key} />}
    </div>
  );
};
export default RowPost;
