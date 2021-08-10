import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Skycraper from "../pages/Skycraper";
import Header from "../components/Header";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route component={Home} path="/" exact />
      <Route component={Skycraper} path="/skycraper" />
    </BrowserRouter>
  );
};

export default Routes;
