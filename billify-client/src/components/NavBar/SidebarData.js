import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as TiIcons from 'react-icons/ti';


export const SidebarData_logged_in = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiOutlineDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: <RiIcons.RiUserSearchLine/>,
    cName: 'nav-text'
  },
  {
    title: 'Billings',
    path: '/billings',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
];

export const SidebarData_logged_out=[
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/',
    icon: <TiIcons.TiInfoLarge />,
    cName: 'nav-text'
  },
  {
    title: 'Login/Sign up',
    path: '/authentication',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  },
];