import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import style from '../../styles/cardResult.style';
import { Link } from 'react-router-dom';

export const CardResult = ({ Title, Year, Type, imdbID, Poster }) => {
  const classes = style();

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titleContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Link
            to={{ pathname: `/movie/${imdbID}` }}
            className=".MuiButtonBase-root .MuiButton-root .MuiButton-contained MuiButton-containedPrimary">
            <Button color="primary" variant="contained">
              Ver mas..
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};
