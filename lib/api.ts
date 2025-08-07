// lib/api.ts
export const fetchTrendingMovies = async () => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Inception',
          poster: '/images/inception.jpg',
          rating: 8.8,
        },
        {
          id: 2,
          title: 'Interstellar',
          poster: '/images/interstellar.jpg',
          rating: 8.6,
        },
      ]);
    }, 1000);
  });
};
