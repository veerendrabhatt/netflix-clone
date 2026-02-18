import "./MovieCard.css";

function MovieCard({ movie }) {
  if (!movie.Poster || movie.Poster === "N/A") {
    return null;   // Skip movies without poster
  }

  return (
    <div className="movieCard">
      <img
        className="movieCard_img"
        src={movie.Poster}
        alt={movie.Title}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </div>
  );
}

export default MovieCard;
