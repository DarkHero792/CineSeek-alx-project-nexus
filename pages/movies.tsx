import { useEffect, useState } from "react";
import MovieCard from "@/components/commons/MovieCard";
import Button from "@/components/commons/Button";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date?: string;
}

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/trending-movies?page=${page}`);
      const data = await res.json();
      setMovies(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch movies", err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div className="bg-[#171D22] text-white min-h-screen p-8 flex flex-col">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Movies (Page {page})
      </h1>

      {loading ? (
        <p className="text-center">Loading movies...</p>
      ) : movies.length === 0 ? (
        <p className="text-center">No movies found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 flex-grow">
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
              releaseYear={movie.release_date?.split("-")[0] || ""}
            />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <Button
          title="Previous"
          action={() => setPage((p) => Math.max(1, p - 1))}
        />
        <Button
          title="Next"
          action={() => setPage((p) => p + 1)}
        />
      </div>
    </div>
  );
};

export default MoviesPage;
