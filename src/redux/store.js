import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = [logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
