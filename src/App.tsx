
import React from 'react';

import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from '../node_modules/react-router-dom/dist/index';

import './App.css'
import Layout from './components/Layout';
import VendorLayout from './components/VendorLayout';
import About from './pages/About';

import Home from './pages/Home';
import Login from './pages/Login';
import Vans from './pages/Vans';


const App: React.FC = () => {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route  path="about" element={<About/>}/>
      <Route  path="vans" element={<Vans/>}/>
      <Route  path="vendors" element={<VendorLayout/>}/>
      <Route  path="login" element={<Login/>}/>
    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;

