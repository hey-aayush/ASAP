import './App.css';
import React,{useState,useEffect} from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ProductPage from './components/ProductPages/ProductPage';
import CustomerPage from './components/CustomerPage/CustomerPage';
import AuthPage from './components/AuthPage/AuthPage';
import axios from 'axios';
import BillingPage from './components/BillPage/BillingPage';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const [user,setUser]=useState({data:null,isFetching:true});
  // const user={name:"aayush"};
  const getUser=()=>{
    const loginRoute = process.env.REACT_APP_BACKEND + '/login';
    console.log(loginRoute);
    axios.get(loginRoute, {withCredentials: true}).then(res => {
      console.log(res);
      if(res['data']['user']){
        setUser({
          data:res['data']['user'],
          isFetching:false,
        });
      }else{
        setUser({
          data:undefined,
          isFetching:false
        });
      }
      }).catch(error => {
          console.log(error);
          setUser({
              data:undefined,
              isFetching:false
          });
      })
  }
  useEffect(()=>{
    let isComponentMounted = true;
    if(isComponentMounted){
      getUser();
    }
    return () => {
        isComponentMounted = false;
    }
  },[]);

  return (
    <div className="App">
      <Router>
        {(user.isFetching)?(
          <>
            Loading...
          </>):(
          <>
            <NavBar user={user.data}/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>          
              <Route path='/billings' element={<BillingPage/>}/>          
              <Route path='/products' element={<ProductPage/>}/>          
              <Route path='/customers' element={<CustomerPage/>}/>          
              <Route path='/portfolio' element={<Portfolio/>}/>          
              <Route path='/authentication' element={(user.data==null)?(<AuthPage />):(<Navigate to='/'/>)}/>        
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
