import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import postsReducer from './reducers/postsReducer';
import commentsReducer from './reducers/commentsReducer';

const reducers = combineReducers({
  postsPage: postsReducer,
  commentsPage: commentsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
