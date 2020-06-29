import React, { Component } from 'react';
import './App.css';

import Auth from './components/auth/Auth';
import Profile from './components/profile/Profile';
import ViewPage from './components/viewpage/ViewPage';

import firebase from 'firebase';
import Navbar from './components/navbar/Navbar';
import Menu from './components/navbar/menu/Menu';
import { Route, Switch } from 'react-router-dom';

const STYLES = {
  mainPage: {
    position: "relative",
    width: "70vw",
    height: "90vh",
    backgroundColor: "orange"
  }
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Navbar />
        </Route>
      </Switch>
      <div>
        <Switch>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
        <div id="main-page" style={StyleSheet.mainPage}>
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
