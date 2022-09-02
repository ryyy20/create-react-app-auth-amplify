import React from "react";
import "./App.css";
import Home from "./balanceyourforce/Home.tsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Privacy from "./balanceyourforce/Privacy.tsx";
import SignIn from "./balanceyourforce/SignIn.tsx";
// import SignUp from "./balanceyourforce/SignUp.tsx";
import ForgotPassword from "./balanceyourforce/ForgotPassword.tsx";
import Terms from "./balanceyourforce/Terms.tsx";
import { withAuthenticator, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/sign-up">
            <AmplifySignUp />
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

// export default App;
export default withAuthenticator(App);
