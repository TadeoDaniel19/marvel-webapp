import { combineReducers } from 'redux';
//import { reducer as form } from 'redux-form';
import movies from '../services/reducers/movies';

export const rootReducer = combineReducers({
  movies,
});