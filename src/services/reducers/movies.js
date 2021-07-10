import { GET_MOVIES } from '../../constants/movies';
/*
* Reducer movies
*/
const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const movies = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case `${GET_MOVIES}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    case `${GET_MOVIES}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case `${GET_MOVIES}_FULFILLED`: {
      const { data: { data } } = payload;
      return {
        ...state,
        isLoading: false,
        data,
      };
    }
    default:
      return state;
  }
};

export default movies;