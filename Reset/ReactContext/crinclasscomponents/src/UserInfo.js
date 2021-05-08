import React, { PureComponent } from "react";

import { AppContext } from "./AppContext";

class UserInfo extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {({ isUserLogged }) => (
          <div>
            {console.log(isUserLogged)}
            <p>
              Użytkownik jest {isUserLogged ? "zalogowany" : "niezalogowany"}{" "}
            </p>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default UserInfo;
