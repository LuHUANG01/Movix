import { useState } from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);
    const [showDetails, setShowDetails] = useState(false);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    function onPosterClick() {
        setShowDetails(true);
    }

    function closeDetails() {
        setShowDetails(false);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster" onClick={onPosterClick}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ❤
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>

            {showDetails && (
                <div className="movie-details">
                    <div className="details-overlay" onClick={closeDetails}></div>
                    <div className="details-content">
                        <h3>{movie.title}</h3>
                        <p><strong>Overview : </strong> {movie.overview}</p>
                        <p><strong>Release Date : </strong> {movie.release_date}</p>
                        <button onClick={closeDetails}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MovieCard;
