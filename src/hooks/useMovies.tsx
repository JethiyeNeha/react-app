import { useContext } from 'react';
import { MoviesContext } from '../context/MovieContext';

export const useMovies = () => useContext(MoviesContext);
