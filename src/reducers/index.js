import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import searchReducer from './searchReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  data: dataReducer,
  search: searchReducer,
});

export default rootReducer;
