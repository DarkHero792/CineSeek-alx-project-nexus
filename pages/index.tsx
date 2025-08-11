import { useEffect, useState } from "react";
import Button from "@/components/commons/Button";
import { useRouter } from "next/router";
import MovieCard from "@/components/commons/MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date?: string;
}

const Home: React.FC = () => {
  const router = useRouter();
  const [trending, setTrending] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/trending-movies")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTrending(data);
        } else {
          console.warn("Unexpected trending movies data format:", data);
          setTrending([]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch trending movies", err);
        setTrending([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#171D22] text-white">
      <section
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://themebeyond.com/html/movflx/img/bg/breadcrumb_bg.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Discover Your Next Favorite{" "}
            <span className="text-[#E2D609]">Movie</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl">
            Explore the latest blockbuster movies, critically acclaimed films,
            and your personal favorites – all in one place.
          </p>
          <Button
            title="Browse Movies"
            action={() => router.push("/movies", undefined, { shallow: false })}
          />
        </div>
      </section>

      {/* Trending Movies Section */}
      <section className="py-16 px-8 md:px-20 bg-[#121018]">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-center">
          Trending Movies
        </h2>
        {loading ? (
          <p className="text-gray-400 text-center">Loading trending movies...</p>
        ) : trending.length === 0 ? (
          <p className="text-gray-400 text-center">No trending movies found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {trending.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterImage={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/placeholder.jpg"
                }
                releaseYear={
                  movie.release_date ? movie.release_date.split("-")[0] : ""
                }
              />
            ))}
          </div>
        )}
      </section>

      <section className="py-16 px-8 md:px-44 bg-[#121018] text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">
          Join CineSeek Now!
        </h2>
        <p className="text-lg md:text-2xl mb-12">
          Sign up today to get access to the latest movies, exclusive content,
          and personalized movie recommendations.
        </p>
        <Button title="Get Started" action={() => router.push("/signup")} />
      </section>
    </div>
  );
};

export default Home;
