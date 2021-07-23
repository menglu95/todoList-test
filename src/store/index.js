import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

export default store