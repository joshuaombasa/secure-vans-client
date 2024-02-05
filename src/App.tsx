
import React from 'react';

import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from '../node_modules/react-router-dom/dist/index';

import './App.css'
import Layout from './components/Layout';
import VendorLayout from './components/VendorLayout';
import About from './pages/About';

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import VanDetails from './pages/VanDetails';
import Vans from './pages/Vans';
import Dashboard from './pages/vendor/Dashboard';
import Income from './pages/vendor/Income';
import ListedVansDetails from './pages/vendor/ListedVanDetails';
import ListedVans from './pages/vendor/ListedVans';
import Reviews from './pages/vendor/Reviews';


const App: React.FC = () : JSX.Element => {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route  path="about" element={<About/>}/>
      <Route  path="vans" element={<Vans/>}/>
      <Route  path="vans/:id" element={<VanDetails/>}/>
      <Route  path="vendors" element={<VendorLayout/>}>
        <Route index   element={<Dashboard/>}/>
        <Route path="income"   element={<Income/>}/>
        <Route path="vans"   element={<ListedVans/>}/>
        <Route path="vans/:id"   element={<ListedVansDetails/>}/>
        <Route path="reviews"   element={<Reviews/>}/>
      </Route>
      <Route  path="login" element={<Login/>}/>
      <Route   path="*" element={<NotFound/>}/>
    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;

