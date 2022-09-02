import React from "react";
import "./App.css";
import Home from "./balanceyourforce/Home.tsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Privacy from "./balanceyourforce/Privacy.tsx";
import SignIn from "./balanceyourforce/SignIn.tsx";
// import SignUp from "./balanceyourforce/SignUp.tsx";
import ForgotPassword from './balanceyourforce/ForgotPassword.tsx';
import Terms from "./balanceyourforce/Terms.tsx";
import { withAuthenticator } from '@aws-amplify/ui-react'
import { SignUp } from "@aws-amplify/ui-react/dist/types/components/Authenticator/SignUp";

function App() {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

const handleAuthStateChange = (authState: string) =>{
    authState === 'signedIn' ? setLoggedIn(true) : setLoggedIn(false);
    console.log('SIGNED OUT')
  }
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/sign-up">
          <SignIn/> {/**SET TO NEW 'coming soon page' */}
          </Route>
          <Route path="/sign-in" onStateChange={handleAuthStateChange}>
            {loggedIn ? <Home/> : <SignIn/>}
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
