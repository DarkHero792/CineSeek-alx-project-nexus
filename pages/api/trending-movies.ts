// pages/api/trending-movies.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      `https://monim.pythonanywhere.com/api/movies/trending/`
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Backend response error:", err);
      return res.status(500).json({ error: "Failed to fetch trending movies" });
    }

    const rawData = await response.json();

    // Normalize: Ensure we always send an array
    let movies: any[] = [];
    if (Array.isArray(rawData)) {
      movies = rawData;
    } else if (Array.isArray(rawData.results)) {
      movies = rawData.results;
    } else {
      console.warn("Unexpected trending movies format:", rawData);
    }

    return res.status(200).json(movies);
  } catch (error: any) {
    console.error("Server error:", error.message);
    return res.status(500).json({ error: "Failed to fetch trending movies" });
  }
}
