import React, { useContext } from "react";

import { AppContext } from "./AppContext";

const UserInfo = () => {
  // przypis typu kontekstu do klasy
  const { isUserLogged } = useContext(AppContext);

  const userLoggedInfo = isUserLogged ? "zalogowany" : "niezalogowany";

  return (
    <div>
      <p>Użytkownik jest {userLoggedInfo}</p>
    </div>
  );
};

export default UserInfo;
