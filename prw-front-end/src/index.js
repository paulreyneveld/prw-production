import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import definitionReducer from './reducers/definitionReducer'

const store = createStore(definitionReducer)

store.dispatch({
  type: 'ADD_DEFINITION',
  data: { test: 'Bogus data'}
})

console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
