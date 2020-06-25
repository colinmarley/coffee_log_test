import React, { Component } from 'react';
import './App.css';

import Auth from './components/auth/Auth';
import Profile from './components/profile/Profile';

import firebase from 'firebase';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Auth />
      <Profile />
      <Navbar />
    </div>
  );
}

export default App;
