import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

function configureStore(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    thunk,
    reactRouterMiddleware,
  ];

  return createStore(
    createRootReducer(history),
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

export default configureStore;
