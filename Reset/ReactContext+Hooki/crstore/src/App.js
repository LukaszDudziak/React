import React, { useState } from "react";
import AppProvider from "./AppContext";

import UserInfo from "./UserInfo";
import Button from "./Button";

import "./App.css";
//po refaktorze
const App = () => (
  <div className='App'>
    <AppProvider>
      <UserInfo />
      <Button />
    </AppProvider>
  </div>
);

export default App;
