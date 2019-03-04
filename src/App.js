import React, { Component } from 'react';
//Import the routing module.
import {BrowserRouter} from 'react-router-dom';
//Let's import the navbar function in the file
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      //other components must be included in the BrowserRouter component
      <BrowserRouter>
        <div className="App">
        <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
