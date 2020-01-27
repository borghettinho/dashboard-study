import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//utils
import theme from "../components/theme";
import routes from "../routes";

//components
import Header from "../components/header";
import Content from "../components/content";
import SideNav from "../components/sidenav";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SideNav />
        <Content>
          <Header />
          <Switch>
            {/* Home redirect */}
            <Route
              exact
              path="/"
              component={() => {
                return <Redirect to="/info" />;
              }}
            />

            {/* Actual routes */}
            {routes.map((route, i) => {
              return (
                <Route key={i} path={route.path} component={route.component} />
              );
            })}

            {/* Default route for 404 */}
            <Route
              path="/"
              component={() => {
                return <Redirect to="/404" />;
              }}
            />
          </Switch>
        </Content>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Layout;
