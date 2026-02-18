import "./Moviecard.css";

function Moviecard({ movie }) {
  if (!movie.Poster || movie.Poster === "N/A") {
    return null;   // Skip movies without poster
  }

  return (
    <div className="Moviecard">
      <img
        className="Moviecard_img"
        src={movie.Poster}
        alt={movie.Title}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </div>
  );
}

export default Moviecard;

