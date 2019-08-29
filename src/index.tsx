import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routing } from 'modules';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'store';
import * as serviceWorker from './serviceWorker';
import 'css/index.css';

ReactDOM.render(
  <ReduxProvider store={store}>
    <Routing />
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
