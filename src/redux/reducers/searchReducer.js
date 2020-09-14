import { typeSearch } from '../types/types';

const initialState = {
  isLoading: false,
  movieSearch: '',
  movieResults: [],
  movieID: '',
  movie: {},
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeSearch.movieStart:
      return {
        ...state,
        isLoading: true,
        movieSearch: action.payload,
      };

    case typeSearch.movieComplete:
      return {
        ...state,
        isLoading: false,
        movieResults: action.payload,
      };

    case typeSearch.movieError:
      return {
        isLoading: false,
        movieResults: null,
      };

    case typeSearch.movieStart_byId:
      return {
        ...state,
        isLoading: true,
        movieID: action.payload,
      };

    case typeSearch.movieComplete_byId:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      };

    case typeSearch.movieError_byId:
      console.log('object');
      return {
        ...state,
        isLoading: false,
        movieID: '',
        movie: null,
      };

    default:
      return { ...state };
  }
};
