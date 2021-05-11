import React from "react";
import { Provider } from "react-redux";

import Form from "./Form";

import { store } from "./app/store";

import "./App.css";
import List from "./List";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Form />
        <p>Książka</p>
        <List />
      </div>
    </Provider>
  );
}

export default App;
