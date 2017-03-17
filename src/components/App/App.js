import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import NavigationBar from '../NavigationBar/NavigationBar';
import './App.css';

class App extends Component {

  render() {

    return (
      <Router history={hashHistory}>
        <Route path="/" component={NavigationBar}>
          {/* <IndexRoute component={HomePage}/>
          <Route path="/service/drug-trace" component={DrugTrace}></Route>
          <Route path="/service/drug-app" component={DrugApp}></Route>
          <Route path="/service/palm-pharmacy" component={PalmPharmacy}></Route>
          <Route path="/service/general-practitioner" component={GeneralPrac}></Route>
          <Route path="/service/skyline-practitioner" component={SkylinePrac}></Route>
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/recruit" component={Recruit}></Route>
          <Route path="/recruit/job-lists" component={JobList}></Route>
          <Route path="/contact-us" component={ContactUs}></Route>
          <Route path="/recruit/job-lists/:id" component={JobDetail}></Route> */}
        </Route>
      </Router>
    )
  }
}

export default App;
