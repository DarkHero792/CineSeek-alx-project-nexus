import { NextApiRequest, NextApiResponse } from "next";
import { MoviesProps } from "@/interfaces";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { year, page, genre } = req.body;

  const url = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page || 1}${year ? `&year=${year}` : ""}${genre ? `&with_genres=${genre}` : ""}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("TMDb API error:", response.status, errorBody);
      return res.status(500).json({ error: "Failed to fetch movies from TMDb" });
    }

    const data = await response.json();
    const movies: MoviesProps[] = data.results;

    return res.status(200).json({ movies });

  } catch (error: any) {
    console.error("Server error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
