import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { HomeScreen } from '../components/home/HomeScreen';
import { DetailResult } from '../components/result/DetailResult';
import { ResultScreen } from '../components/result/ResultScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/results" component={ResultScreen} />
          <Route path="/movie/:id" component={DetailResult} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
