import { apiImdb } from '../helpers/getData';
import { typeSearch } from '../types/types';

const apiKey = 'dc4b5780';
const urlBase = `http://www.omdbapi.com/?apikey=${apiKey}`;

export const searchMovie = (movieTitle) => {
  return async (dispatch) => {
    const url = `${urlBase}&s=${movieTitle}`;

    dispatch(searchStartMovie(movieTitle));
    try {
      const { Response, Search: movieData } = await apiImdb(url);
      // Search.forEach((movie) => {
      //   movies.push({ ...movie });
      // });
      if (!Response) {
        dispatch(searchErrorMovie('No match'));
      } else {
        dispatch(searchCompleteMovie(movieData));
      }
    } catch (error) {
      dispatch(searchErrorMovie(error));
    }
  };
};

export const searchMoviebyId = (imdbID) => {
  return async (dispatch) => {
    const url = `${urlBase}&i=${imdbID}`;

    dispatch(searchStartMovieId(imdbID));
    try {
      const movieData = await apiImdb(url);
      if (!movieData) {
        dispatch(searchErrorMovieId('No match'));
      } else {
        dispatch(searchCompleteMovieId(movieData));
      }
    } catch (error) {
      dispatch(searchErrorMovieId(error));
    }

    // const { data, loading, error } = await useFetch(url);

    // dispatch(searchMovie(searchMovieTitle));
  };
};

export const searchStartMovie = (search) => ({
  type: typeSearch.movieStart,
  payload: search,
});

export const searchErrorMovie = () => ({
  type: typeSearch.error,
});

export const searchCompleteMovie = (data) => ({
  type: typeSearch.movieComplete,
  payload: data,
});

export const searchStartMovieId = (id) => ({
  type: typeSearch.movieStart_byId,
  payload: id,
});

export const searchErrorMovieId = () => ({
  type: typeSearch.movieError_byId,
});

export const searchCompleteMovieId = (data) => ({
  type: typeSearch.movieComplete_byId,
  payload: data,
});
