import React, { PureComponent } from "react";
import { AppContext, defaultObject } from "./AppContext";

import UserInfo from "./UserInfo";
import Button from "./Button";

import "./App.css";

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
    isUserAdult: true,
  };

  render() {
    return (
      <div className='App'>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          {/* nie przekazuje żadnych informacji o handlerze i stanie */}
          <UserInfo />
          <Button />
        </AppContext.Provider>

        {/* elementy korzystają z najbliższego providera */}
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserAdult,
            toggleLoggedState: this.handleToggleStateIsAdult,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }

  handleToggleStateIsLogged = () =>
    this.setState((prevState) => ({ isUserLogged: !prevState.isUserLogged }));

  handleToggleStateIsAdult = () =>
    this.setState((prevState) => ({ isUserAdult: !prevState.isUserAdult }));
}

export default App;
