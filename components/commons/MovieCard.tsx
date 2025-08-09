// components/commons/MovieCard.tsx
import { MovieProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MovieCard: React.FC<MovieProps> = ({ id, title, posterImage, releaseYear }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites: MovieProps[] = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
    setIsFavorite(storedFavorites.some((movie) => movie.id === id));
  }, [id]);

  // Toggle favorite movie
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    const storedFavorites: MovieProps[] = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");

    let updatedFavorites: MovieProps[];
    if (storedFavorites.some((movie) => movie.id === id)) {
      updatedFavorites = storedFavorites.filter((movie) => movie.id !== id);
    } else {
      updatedFavorites = [...storedFavorites, { id, title, posterImage, releaseYear }];
    }

    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Link href={`/movies/${id}`} passHref>
      <div className="relative h-[563px] hover:shadow-lg hover:scale-[1.02] transition duration-200 cursor-pointer">
        <div>
          <Image
            className="h-[430px] w-full rounded-md"
            src={posterImage}
            width={300}
            height={430}
            alt={title}
          />
          {/* Favorite Icon Button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 z-10"
          >
            {isFavorite ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
                14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 
                8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
                2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 
                22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex justify-between items-center py-4">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-xl text-[#E2D609]">{releaseYear}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
