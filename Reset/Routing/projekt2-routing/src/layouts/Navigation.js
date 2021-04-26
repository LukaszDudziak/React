import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

//tworzenie menu za pomocą listy obiektów z danymi do generowania kolejnych navLinków z obsługą exact
const list = [
  { name: "start", path: "/", exact: true },
  { name: "produkty", path: "/products" },
  { name: "kontakt", path: "/contact" },
  { name: "panel admina", path: "/admin" },
];
const Navigation = () => {
  //tworzenie pola nav z warunkowych exact
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className='main'>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
