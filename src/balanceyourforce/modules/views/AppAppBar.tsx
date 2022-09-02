import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar.tsx";
import Toolbar from "../components/Toolbar.tsx";
import { Link as RouterLink } from "react-router-dom";
import { Auth } from 'aws-amplify';

var currentUser = ''
var loggedIn


function AppAppBar() {
  const rightLink = {
    fontSize: 16,
    color: "common.white",
    ml: 3,
  };
  const checkUserAuth = (authState: string) =>{
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then(user => {currentUser = user;loggedIn = true; console.log(user)})
  .catch(err => console.log(err));
    }

    function routeUser(): String{
      Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {currentUser = user;loggedIn = true; console.log(user)})
    .catch(err => console.log(err));
    return loggedIn ? "/home" : "/sign-in/"
    }
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ fontSize: 24 }}
          >
            {"Balance Your Force"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              component={RouterLink}
              to={routeUser}
              sx={rightLink}
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/sign-up/"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Sign Up"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
