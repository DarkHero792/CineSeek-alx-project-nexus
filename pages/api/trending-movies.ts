// pages/api/trending-movies.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch("https://monim.pythonanywhere.com/api/movies/trending/");

    if (!response.ok) {
      const err = await response.text();
      console.error("Backend response error:", err);
      return res.status(response.status).json({ error: "Failed to fetch trending movies" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Server error:", error.message);
    return res.status(500).json({ error: "Failed to fetch trending movies" });
  }
}
