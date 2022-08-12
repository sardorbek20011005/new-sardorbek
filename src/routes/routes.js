import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Home from '../containers/Home';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home_1 from '../pages/home_1';
import About from '../pages/about';
import Shop from '../pages/shop';
import Donate from '../pages/donate';
import Contact from '../pages/contact';

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: '/users', element: <Users /> },

      { path: '/home_1', element: <Home_1 /> },
      { path: '/about', element: <About /> },
      { path: '/shop', element: <Shop /> },
      { path: '/donate', element: <Donate /> },
      { path: '/contact', element: <Contact /> },

      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
