import React from "react";
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);
const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

const handleAuthStateChange = (authState: string) =>{
    authState === 'signedIn' ? setLoggedIn(true) : setLoggedIn(false);
    console.log('SIGNED OUT')
  }

export default function App() {
//   return (
    return loggedIn ? (
    <Authenticator onStateChange={handleAuthStateChange}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator> 
  ) : (<Authenticator onStateChange={handleAuthStateChange}>
    {({ signOut, user }) => (
      <main>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
  </Authenticator>)
}