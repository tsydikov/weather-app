import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { reducer } from "./redux/reducer";
import { loadState, saveState } from './localStorage'
import { BrowserRouter } from 'react-router-dom';

const persistedState = loadState();
const store = createStore(reducer,persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
  saveState(store.getState());
});

const app = (
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  )
  
render(app , document.getElementById('root'));



reportWebVitals();
