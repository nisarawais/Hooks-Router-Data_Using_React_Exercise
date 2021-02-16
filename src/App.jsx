import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Navigation and Router
import Router from './components/shared/Router';
import Navigation from './components/shared/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Router/>
    </BrowserRouter>
  );
}
 
export default App;