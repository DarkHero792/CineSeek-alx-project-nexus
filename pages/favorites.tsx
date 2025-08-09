// pages/favorites.tsx
import { useEffect, useState } from "react";
import MovieCard from "@/components/commons/MovieCard";
import { MovieProps } from "@/interfaces";

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<MovieProps[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("favoriteMovies");
      if (stored) {
        const parsed: unknown = JSON.parse(stored);

        // Validate the parsed data is an array of objects with required keys
        if (Array.isArray(parsed)) {
          const validMovies = parsed.filter(
            (movie) =>
              movie &&
              typeof movie.id === "string" &&
              typeof movie.title === "string" &&
              typeof movie.posterImage === "string" &&
              typeof movie.releaseYear === "string"
          ) as MovieProps[];

          setFavorites(validMovies);
        }
      }
    } catch (err) {
      console.error("Failed to load favorite movies:", err);
      setFavorites([]);
    }
  }, []);

  return (
    <div className="bg-[#171D22] text-white min-h-screen py-16 px-8 md:px-44">
      <h1 className="text-4xl font-bold mb-8">Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p className="text-lg">You have no favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
