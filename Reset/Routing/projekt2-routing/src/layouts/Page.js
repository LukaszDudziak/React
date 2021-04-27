import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductsListPage from "../pages/ProductsListPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/products' component={ProductsListPage} />
        <Route path='/product/:id' component={ProductsPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/login' component={LoginPage} />
        {/* obsługa errorPage tylko z pomocą switcha */}
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
