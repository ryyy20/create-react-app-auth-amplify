import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import GreyJedi from './images/GreyJedi.jpeg';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
              <img src={GreyJedi} className="App-GreyJedi" alt="GreyJedi" />
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
