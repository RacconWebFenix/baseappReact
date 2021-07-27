import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Personagens from "../pages/Personagens";
import Contato from "../pages/Contato";
import Header from "../components/Header"

const Routes = () => {
    return (
     
      <BrowserRouter>
        <Header></Header>
        <Route component={Home} path="/" exact />
        <Route component={Sobre} path="/sobre" />
        <Route component={Personagens} path="/personagens" />
        <Route component={Contato} path="/contato" />
      </BrowserRouter>
    );
  };
  
  export default Routes;
  