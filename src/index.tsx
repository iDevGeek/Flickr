import React from 'react';
import { render } from 'react-dom';
import './styles/base.scss';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
const store = configureStore();

render(
  <React.StrictMode>
    <Root store={store} history={history} />
  </React.StrictMode>,
  document.getElementById('root')
);
