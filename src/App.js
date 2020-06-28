import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'

import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    </Provider>
  );
}

export default App;
