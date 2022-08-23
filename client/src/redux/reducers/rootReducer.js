import { combineReducers } from 'redux';
import playerFirstReducer from './playerFirstReducer';
import playerSecondReducer from './playerSecondReducer';

const rootReducer = combineReducers({
  playerfirst: playerFirstReducer,
  playersecond: playerSecondReducer,
});

export default rootReducer;
