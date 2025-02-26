import './css/App.css'
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext"
import NavBar from "./components/NavBar"
import { useState, useEffect } from "react" // Import useState and useEffect

function App() {
  const [loadPopularMovies, setLoadPopularMovies] = useState(() => () => {});

  return (  
    <MovieProvider>
      <NavBar onHomeClick={loadPopularMovies} /> {/* Pass the handler to NavBar */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home setLoadPopularMovies={setLoadPopularMovies} />} /> {/* Pass setLoadPopularMovies to Home */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
