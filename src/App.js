import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import HomePage from "./components/HomePage/HomePage";
import {rootReducer} from "./reducers/rootReducer";
import {Provider} from "react-redux";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

);

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
