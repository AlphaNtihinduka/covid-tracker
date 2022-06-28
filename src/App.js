import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './components/Home';
import Continents from './components/Continents';
import './App.css';
// import Countries from './components/Countries';

const RouterWrapper = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    // { path: '/Countries', element: <Countries /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Router>
        <RouterWrapper />
      </Router>
      <Continents />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <RouterWrapper />
//       </Router>
//       <Continents />
//     </div>
//   );
// }

export default App;
