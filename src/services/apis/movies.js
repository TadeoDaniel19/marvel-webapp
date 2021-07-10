// movies?order_by_chronology=asc

import instanceAPI from './axios-config';

export const getAllMoviesAPI = () => {
  return instanceAPI.get('/movies?order_by_chronology=asc');
};

export const getMovieAPI = (movieId) => {
  return instanceAPI.get(`/movie/${movieId}`);
};
