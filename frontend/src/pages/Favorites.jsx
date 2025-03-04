import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const { favorites } = useMovieContext();

    const handleExport = () => {
        const dataStr = favorites.map(movie => `Title: ${movie.title}\n`).join('\n');
        const blob = new Blob([dataStr], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'favorites.txt';
        link.click();
    };

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <button onClick={handleExport}>Export Favorites</button>
                <div className="movies-grid ">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start addding movies to your favorites and they will appear here!</p>
        </div>
    );
}

export default Favorites;