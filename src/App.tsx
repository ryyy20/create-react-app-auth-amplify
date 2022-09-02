import React from "react";
import "./App.css";
import Home from "./balanceyourforce/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Privacy from "./balanceyourforce/Privacy";
import SignIn from "./balanceyourforce/SignIn";
import SignUp from "./balanceyourforce/SignUp";
import ForgotPassword from "./balanceyourforce/ForgotPassword";
import Terms from "./balanceyourforce/Terms";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
