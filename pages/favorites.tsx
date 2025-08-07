// pages/favorites.tsx
import { useEffect, useState } from "react";
import MovieCard from "@/components/commons/MovieCard";
import { MovieProps } from "@/interfaces";


const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<MovieProps[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteMovies");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#121018] text-white">
      
      <section className="p-8 md:px-20">
        <h1 className="text-4xl font-bold mb-6">Your Favorite Movies</h1>

        {favorites.length === 0 ? (
          <p className="text-lg text-gray-400">You have no favorite movies yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterImage={movie.posterImage}
                releaseYear={movie.releaseYear}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default FavoritesPage;
