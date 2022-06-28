import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './components/Home';
import Continents from './components/Continents';
import './App.css';

const RouterWrapper = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/', element: <Continents /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Router>
        <RouterWrapper />
      </Router>
    </div>
  );
}

export default App;
