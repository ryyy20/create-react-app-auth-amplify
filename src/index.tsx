import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App.tsx';
import * as serviceWorker from "./serviceWorker";
import { Amplify, Storage, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
// Auth.configure(awsconfig)
// Auth.configure({ mandatorySignIn: false});
Amplify.configure(awsconfig);
// Storage.configure(awsconfig);
//src/App.tsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
