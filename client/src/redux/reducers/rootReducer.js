import { combineReducers } from 'redux';
import playerFirstReducer from './playerFirstReducer';
import playerSecondReducer from './playerSecondReducer';
import ResultReducer from './ResultReducer';

const rootReducer = combineReducers({
  playerfirst: playerFirstReducer,
  playersecond: playerSecondReducer,
  results: ResultReducer,
});

export default rootReducer;
