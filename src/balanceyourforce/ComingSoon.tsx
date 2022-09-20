import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./ComingSoon.css";

class ComingSoon extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          {/* <div className="logo">
            <a href="/">Home</a>
          </div> */}
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Lightsaber Workbench and Meditation Chambers </h1>
            <h2> are under construction. Please check back for more updates.</h2>
          </div>
          {/* <a href="mailto:ryan.arnold@uconn.edu">
            <div className="cta">Send me an email.</div>
          </a> */}
          
          <div className="logo">
            <a href="/">Return to Home Page</a>
          </div>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="https://github.com" target="_blank" rel="noopener noreferrer">Ryan A.</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
    );
  }
}

export default ComingSoon;