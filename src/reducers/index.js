import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  data: dataReducer,
});

export default rootReducer;
