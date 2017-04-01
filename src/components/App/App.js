import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import NavigationBar from '../NavigationBar/NavigationBar';
import HomePage from '../../pages/HomePage/HomePage';
import ArticleItem from '../../pages/ArticleItem/ArticleItem';
import Article from '../../pages/Article/Article';
import Work from '../../pages/Work/Work';
import Photo from '../../pages/Photo/Photo';
import About from '../../pages/About/About';
import './App.css';

class App extends Component {

  render() {

    return (
      <Router history={hashHistory}>
        <Route path="/" component={NavigationBar}>
          <IndexRoute component={HomePage}/>
          <Route path="/articles" component={ArticleItem}></Route>
          <Route path="/articles/:date/:name" component={Article}></Route>
          <Route path="/works" component={Work}></Route>
          <Route path="/photos" component={Photo}></Route>
          <Route path="/about" component={About}></Route>
        </Route>
      </Router>
    )
  }
}

export default App;
