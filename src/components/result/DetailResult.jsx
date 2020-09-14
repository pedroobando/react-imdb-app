import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Typography, CircularProgress } from '@material-ui/core';
import { searchMoviebyId } from '../../redux/actions/search';

export const DetailResult = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const { movie, isLoading } = useSelector((state) => state.search);

  useEffect(() => {
    if (!movie || (movie && movie.imdbID !== id)) {
      dispatch(searchMoviebyId(id));
    }
  }, [dispatch, id, movie]);

  const renderDetail = () => {
    return (
      <>
        <Typography variant="h3">{movie.Title}</Typography>
        <img src={movie.Poster} alt={movie.Title} />
        <Typography>
          <strong>Actors: </strong>
          {movie.Actors}
        </Typography>
        <Typography>
          <strong>Director: </strong>
          {movie.Director}
        </Typography>
        <Typography>
          <strong>Country: </strong>
          {movie.Country}
        </Typography>
        <Typography>
          <strong>Clasification: </strong>
          {movie.Rated}
        </Typography>
        <Typography>
          <strong>Actors: </strong>
          {movie.Awards}
        </Typography>
        <Typography>
          <strong>Sinopsis: </strong>
          {movie.Plot}
        </Typography>
      </>
    );
  };

  return (
    <Container>
      {isLoading ? <CircularProgress size={100} color="primary" /> : renderDetail()}
    </Container>
  );
};
