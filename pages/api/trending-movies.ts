import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1 } = req.query;

  try {
    const backendRes = await fetch(
      `https://monim.pythonanywhere.com/api/movies/trending/?page=${page}`
    );

    if (!backendRes.ok) {
      throw new Error(`Backend API error: ${backendRes.statusText}`);
    }

    const data = await backendRes.json();
    res.status(200).json(data.results || data);
  } catch (err) {
    console.error("Error fetching trending movies:", err);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
}
