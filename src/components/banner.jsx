import { useEffect, useState } from "react";
import { fetchBySearch } from "../services/api";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchBySearch("avengers");
      if (response.data.Search) {
        setMovie(response.data.Search[0]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="banner">
      
      {/* Blurred Background */}
      <div
        className="banner_bg"
        style={{
          backgroundImage: `url(${movie?.Poster})`,
        }}
      />

      <div className="banner_content_wrapper">
        <img
          className="banner_poster"
          src={movie?.Poster}
          alt={movie?.Title}
        />

        <div className="banner_content">
          <h1>{movie?.Title}</h1>

          <div className="banner_buttons">
            <button className="btn_play">Play</button>
            <button className="btn_list">My List</button>
          </div>

          <p className="banner_description">
            Experience epic storytelling and action-packed entertainment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
