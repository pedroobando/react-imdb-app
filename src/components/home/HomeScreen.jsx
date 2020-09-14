import React from 'react';
import { Container, Typography, Grid, Card, TextField, Button } from '@material-ui/core';

import { useForm } from '../../hooks/useForm';

import { MovieIcon } from '../../icons/MovieIcon';
import styles from '../../styles/style';

const initialForm = {
  searchText: '',
};

export const HomeScreen = ({ history }) => {
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const { searchText } = formValues;

  const classes = styles();

  const handleReset = () => {
    reset();
  };

  const handleSearch = () => {
    history.push(`/results?movieName=${searchText.trim()}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          className={classes.textFieldSearch}
          name="searchText"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search..."></TextField>
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleReset}>
            Cancel
          </Button>
          <Button
            variant="contained"
            className={classes.searchButton}
            color="primary"
            onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
