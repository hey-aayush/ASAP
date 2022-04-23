import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData_logged_in, SidebarData_logged_out } from './SidebarData';
import './NavBar.css';
import { IconContext } from 'react-icons';
import brandLogo from '../../assets/bill.png';
import * as BiIcons from 'react-icons/bi';
import axios from 'axios';

function Navbar({user}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logOut=async ()=>{
      console.log("Loging Out")
      const userRoute = process.env.REACT_APP_BACKEND + '/logout';
      await axios.get(userRoute, {withCredentials: true}).then(res => {
          console.log(res);
          console.log("Log Out Clicked !");
          window.location.reload(false);
      }).catch(error => {
          console.log(error);
      })
    }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className='brand-logo'>
            Billify
          </div>
          <Link to='#' className='menu-logo'>
            <img src={brandLogo} height={70} width={70} alt={'logo'}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {((user==null)?(SidebarData_logged_out):(SidebarData_logged_in)).map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );}
            )}
            {(user==null)?(<></>):(
              <li className='nav-text'>
                <Link onClick={logOut} to='/'>
                  <BiIcons.BiLogOut />
                  <span>LogOut</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;