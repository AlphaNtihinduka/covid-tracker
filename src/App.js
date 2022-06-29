import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import Continents from './components/Continents';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/countries/:continent" element={<Countries />} />
        {/* path="/country/:continent" */}
      </Routes>
    </div>
  );
}

export default App;
