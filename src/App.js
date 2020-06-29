import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider, useDispatch } from 'react-redux'

import store from "./redux/store"

import Todo from "./Todo"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">

          <Todo />

        </header>
      </div>
    </Provider>
  );
}

export default App;
