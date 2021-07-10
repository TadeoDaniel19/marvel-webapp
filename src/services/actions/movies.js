import {
  getAllMoviesAPI
} from '../apis/movies';
import {
  GET_MOVIES
} from '../../constants/movies';

export const getMovies = (account, id) => ({
  type: GET_MOVIES,
  payload: getAllMoviesAPI(),
});

export const resetMovies = (account, id) => ({
  type: GET_MOVIES,
  payload: null,
});