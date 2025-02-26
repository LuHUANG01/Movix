import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]) /* This initializes the favorites state to an empty array and provides a setFavorites function to update it. */

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) {
          setFavorites(JSON.parse(storedFavs))
        }    
    }, [])

    useEffect(() => {
        +
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]) 
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite =(movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}