import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import dataReducer from './dataReducer';
import searchReducer from './searchReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  data: dataReducer,
  search: searchReducer,
});

export default rootReducer;
