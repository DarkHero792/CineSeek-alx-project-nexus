import { useEffect, useState } from "react";
import MovieCard from "@/components/commons/MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_year?: string;
}

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/api/fetch-movies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ year: 2024, page: 1 }) // adjust as needed
        });

        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await res.json();
        setMovies(data.results || data); // backend may return either array or { results: [] }
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-[#171D22] text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Movies</h1>

      {loading ? (
        <p>Loading movies...</p>
      ) : movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterImage={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/placeholder.jpg"
              }
              releaseYear={movie.release_year || ""}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
