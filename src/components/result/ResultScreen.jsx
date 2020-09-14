import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import queryString from 'query-string';
import { Container, Typography, CircularProgress } from '@material-ui/core';

import { searchMovie } from '../../redux/actions/search';
import { CardResult } from './CardResult';

export const ResultScreen = ({ location }) => {
  const dispatch = useDispatch();
  const oldSearchTitle = useRef('');
  const { movieResults: movies, isLoading } = useSelector((state) => state.search);

  useEffect(() => {
    if (location.search.trim().length >= 2) {
      const { movieName } = queryString.parse(location.search);
      if (movieName !== oldSearchTitle.current) {
        dispatch(searchMovie(movieName));
        oldSearchTitle.current = movieName;
      }
    }
  }, [location.search, dispatch]);

  const renderMovies = () => {
    if (movies && movies.length >= 1) {
      return movies.map((value, index) => (
        <CardResult key={`${index}_${value.imdbID}`} {...value} />
      ));
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    } else {
      return <div />;
    }
  };

  return (
    <Container>
      <Typography variant="h4">Results</Typography>
      <hr />
      {renderMovies()}
    </Container>
  );
};
