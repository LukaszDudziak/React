import React from "react";
import { Route, Redirect } from "react-router-dom";

//do symulacji dostępu
const permission = false;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permission ? (
          <h3>Panel admina - powitanko</h3>
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default AdminPage;
