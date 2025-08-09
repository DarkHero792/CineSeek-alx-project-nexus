// pages/api/fetch-movie-details.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: "Movie ID is required" });
  }

  try {
    const response = await fetch(
      `https://monim.pythonanywhere.com/api/movies/${id}/`
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Backend response error:", err);
      return res.status(500).json({ error: "Failed to fetch movie details" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Server error:", error.message);
    return res.status(500).json({ error: "Failed to fetch movie details" });
  }
}
