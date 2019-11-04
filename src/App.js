import React from 'react';
import './App.css';

import { createStore } from 'redux';
import HomePage from "./components/HomePage/HomePage";
import {rootReducer} from "./reducers/rootReducer";
import {Provider} from "react-redux";
import {LoginForm} from "./components/LoginForm/LoginForm";
import RootComponent from "./containers/Root/RootContainer";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

);

function App() {
  return (
      <Provider store={store}>
        <RootComponent/>
      </Provider>
  );
}

export default App;
