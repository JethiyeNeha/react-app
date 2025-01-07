import { createContext, useEffect, useState } from 'react';
import { IMovie } from '../interfaces/movies.interface';

export const MoviesContext = createContext<{
  movies: IMovie[];
  fetchMovies: () => void;
}>({ movies: [], fetchMovies: () => {} });

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const fetchMovies = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products, 'data');
        setMovies(data.products);
      })
      .catch((error) => console.error('Error fetching Movies:', error));
  };

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [movies]);

  return (
    <MoviesContext.Provider value={{ movies, fetchMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
