import React, { useState } from "react";
import { AppContext, defaultObject } from "./AppContext";

import UserInfo from "./UserInfo";
import Button from "./Button";

import "./App.css";
//po refaktorze
const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
  const [isUserAdult, setIsUserAdult] = useState(true);

  const toggleLoggedState = () => setIsUserLogged((prevValue) => !prevValue);
  const toggleAdultState = () => setIsUserAdult((prevValue) => !prevValue);

  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          isUserLogged,
          toggleLoggedState,
        }}
      >
        <UserInfo />
        <Button />
      </AppContext.Provider>

      <AppContext.Provider
        value={{
          isUserLogged: isUserAdult,
          toggleLoggedState: toggleAdultState,
        }}
      >
        <UserInfo />
        <Button />
      </AppContext.Provider>
    </div>
  );
};

export default App;
