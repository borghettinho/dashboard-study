import React from "react";
import { NavLink } from "react-router-dom";

import { Header, Logo, Nav } from "./styles";

export default () => {
  return (
    <Header>
      <Logo />
      <Nav>
        <ul>
          <li>
            <NavLink to="/info" activeClassName="selected">
              Gestão
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" activeClassName="selected">
              Configuração
            </NavLink>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};
