import React, { Component } from 'react';
import Router from './Router';
import { NavLink } from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';

const Navigation = (props) => {
  return(
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/cart'>Cart</NavLink></li>
      </ul>
    </nav>
  )
}

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation/>
        <Router/>
      </div>
    );
  }
}

export default App;


/* React Example - Create an Online Store using React, Redux React Router v4 [Part 1] - Episode #16
by React University

https://www.youtube.com/watch?v=T_HtlP80UYc

*/