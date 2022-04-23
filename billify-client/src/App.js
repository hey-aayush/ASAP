import './App.css';
import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import BillPage from './components/Pages/BillPage';
import ProductPage from './components/Pages/ProductPage';
import CustomerPage from './components/Pages/CustomerPage';
import AuthPage from './components/AuthPage/AuthPage';

function App() {
  // const user={name:"aayush"};
  const user=null;
  return (
    <div className="App">
      <Router>
        <NavBar user={user}/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>          
          <Route path='/billings' element={<BillPage/>}/>          
          <Route path='/products' element={<ProductPage/>}/>          
          <Route path='/customers' element={<CustomerPage/>}/>          
          <Route path='/authentication' element={(user==null)?(<AuthPage/>):(<Navigate to='/'/>)}/>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
