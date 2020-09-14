import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { searchReducer } from '../reducers/searchReducer';

// import { notesReducer } from '../reducers/notesReducer';
// import { authReducer } from '../reducers/authReducer';
// import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  search: searchReducer,
  // notes: notesReducer,
  // auth: authReducer,
  // ui: uiReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
