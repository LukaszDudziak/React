import React from "react";
import { Route } from "react-router-dom";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <Route
        path='/'
        exact
        render={(props) => {
          return (
            <p>
              Jesteś na <span>stronie głównej</span>
            </p>
          );
        }}
      />

      <Route
        path='/:page'
        exact
        render={(props) => {
          return (
            <>
              <p>
                Jesteś na <span>{props.match.params.page}</span>
                Jesteś na <span>{props.match.url}</span>
                Jesteś na <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />

      <Route
        path='/:page/:idProduct'
        exact
        render={(props) => {
          return (
            <>
              <p>
                Jesteś na <span>{props.match.params.idProduct}</span>
                Jesteś na <span>{props.match.url}</span>
                Jesteś na <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
