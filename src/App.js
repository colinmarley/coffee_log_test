import React from 'react';
import './App.css';

import Auth from './components/auth/Auth';
import Profile from './components/navbar/profile/Profile';

function App() {
  return (
    <div className="App">
      <Auth />
      <Profile />
    </div>
  );
}

export default App;
