import { combineReducers } from 'redux';
import subscribersReducer from './Subscribers/reducer';
import viewsReducer from './views/reducer';
import commentsReducer from './comments/reducer';

const rootReducer = combineReducers({
    views: viewsReducer,
    subscribers: subscribersReducer,
    comments: commentsReducer,
});

export default rootReducer;
