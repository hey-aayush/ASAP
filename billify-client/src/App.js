import './App.css';
import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
