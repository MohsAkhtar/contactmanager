import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="johndoe@email.com"
            phone="123456789"
          />
          <Contact
            name="Karen Armstrong"
            email="karmstrong@email.com"
            phone="111222333"
          />
        </div>
      </div>
    );
  }
}

export default App;
