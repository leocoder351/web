import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import NavigationBar from '../NavigationBar/NavigationBar';
import HomePage from '../../pages/HomePage/HomePage';
import Article from '../../pages/Article/Article';
import Work from '../../pages/Work/Work';
import AboutMe from '../../pages/AboutMe/AboutMe';
import './App.css';

class App extends Component {

  render() {

    return (
      <Router history={hashHistory}>
        <Route path="/" component={NavigationBar}>
          <IndexRoute component={HomePage}/>
          <Route path="/articles" component={Article}></Route>
          <Route path="/works" component={Work}></Route>
          <Route path="/about-me" component={AboutMe}></Route>
        </Route>
      </Router>
    )
  }
}

export default App;
