import React, { Component } from 'react';
import SantasLetterForm from './santasletter_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header-background">
          <div className="heading">
            <h1>Santa's Letter</h1>
          </div>
          <div className="subheading">
            Fill out your wishlist, click send, and wait for Santa's reply!
          </div>
        </div>
        <SantasLetterForm/>
      </div>
    );
  }
}
