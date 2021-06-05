import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import './App.css';

// components
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App
