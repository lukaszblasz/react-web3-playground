import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { compose } from '../../../../../../Library/Caches/typescript/2.6/node_modules/redux';
import logger from 'redux-logger'


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);
