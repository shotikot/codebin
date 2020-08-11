import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "../components/pages/Main/Main";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={() => {
                    return <Main status={false}/>;
                  }}
                />
                <Route
                  exact
                  path="/p/:filename"
                  render={props => {
                    return <Main filename={5} status={true}/>;
                  }}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  );
};
