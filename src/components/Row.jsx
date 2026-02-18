import { useEffect, useState } from "react";
import { fetchBySearch } from "../services/api";
import MovieCard from "./Moviecard";
import "./Row.css";

function Row({ title, searchTerm }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchBySearch(searchTerm);

        if (response.data.Response === "True") {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.log("Error fetching:", error);
      }
    }
    fetchData();
  }, [searchTerm]);

  return (
    <div className="row">
      <h2>{title}</h2>

      {movies.length === 0 ? (
        <p className="no_movies">No movies found</p>
      ) : (
        <div className="row_posters">
          {movies.map((movie) =>
            movie.Poster !== "N/A" ? (
              <MovieCard key={movie.imdbID} movie={movie} />
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

export default Row;

