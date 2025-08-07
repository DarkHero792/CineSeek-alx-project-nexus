// pages/movies/[id].tsx
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Loading from '@/components/commons/Loading'
import { MoviesProps } from '@/interfaces'

const MovieDetail = () => {
  const router = useRouter()
  const { id } = router.query

  const [movie, setMovie] = useState<MoviesProps | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!id) return

    const fetchMovie = async () => {
      setLoading(true)
      const res = await fetch('/api/fetch-movie', {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!res.ok) {
        setLoading(false)
        return
      }

      const data = await res.json()
      setMovie(data.movie)
      setLoading(false)
    }

    fetchMovie()
  }, [id])

  if (loading || !movie) return <Loading />

  return (
    <div className="min-h-screen text-white px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{movie.titleText?.text}</h1>
      <img src={movie.primaryImage?.url} alt={movie.titleText?.text} className="w-64 h-auto mb-6" />
      <p className="text-lg text-gray-400">Released: {movie.releaseYear?.year}</p>
      {/* Add more movie details here if needed */}
    </div>
  )
}

export default MovieDetail
