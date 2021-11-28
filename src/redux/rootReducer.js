import { combineReducers } from 'redux';
import subscribersReducer from './Subscribers/reducer';
import viewsReducer from './views/reducer';

const rootReducer = combineReducers({
    views: viewsReducer,
    subscribers: subscribersReducer,
});

export default rootReducer;
