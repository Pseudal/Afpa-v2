import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/admin/Login';
import Home from './components/Public/Home';
import NaviTest from './components/admin/NaviTest';
import Error from './components/404';
import Foot from './components/Public/Foot';
import Register from './components/Public/Register';
import RegisterA from './components/admin/RegisterA';
import PrivateRoute from "./components/admin/PrivateRoute";
import UserRoute from "./components/admin/UserRoute"
import Produits from './components/Public/Produits';
import Dash from './components/admin/Dashboard.js';
import AddProduct from './components/Utility/AddProduct';
import ModProduct from './components/Utility/ModProduct';
import Mention from './components/Public/Mention';
import More from './components/Public/More';
import Apropos from './components/Public/Apropos';
import Contact from './components/Public/Contact';
import DashProduct from './components/admin/DashboardProduct';
import AddArticle from './components/Utility/AddArticle';
import ModArticle from './components/Utility/ModArticle';
import DashMessage from './components/admin/DashboardMessage';
import DashUser from './components/admin/DashboardUser';
import DashMenu from './components/admin/DashMenu';
import Dashtest from './components/admin/DashMenuTest';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="DashTest" element={<Dashtest />} />
          <Route path="Navitest" element={<NaviTest />} />    
          <Route element={<NaviTest />}>
              <Route path="Login" element={<Login />} />
              <Route path="Register" element={<Register />} />
              <Route path="Mention" element={<Mention />} /> 
              
              <Route element={<Foot />}>
                <Route path="Contact" element={<Contact/>} />
                <Route path="Produits" element={<Produits/>} />
                <Route path="A%20propos" element={<Apropos/>} />
                <Route path="More" element={<UserRoute><More/></UserRoute>} />
                <Route path="/" element={<Home />} />
              </Route>              
              <Route element={<DashMenu />}>
                <Route path="New%20User" element={<PrivateRoute><RegisterA /></PrivateRoute>} />
                <Route path="AddProduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
                <Route path="ModProduct" element={<PrivateRoute><ModProduct /></PrivateRoute>} />
                <Route path="AddArticle" element={<PrivateRoute><AddArticle /></PrivateRoute>} />
                <Route path="ModArticle" element={<PrivateRoute><ModArticle /></PrivateRoute>} />
                <Route path="Dashboard" element={<PrivateRoute><Dash/></PrivateRoute>} />
                <Route path="DashboardProduct" element={<PrivateRoute><DashProduct/></PrivateRoute>} />
                <Route path="DashboardMessage" element={<PrivateRoute><DashMessage/></PrivateRoute>} />
                <Route path="DashboardUser" element={<PrivateRoute><DashUser/></PrivateRoute>} />
            </Route>
          </Route>
            <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;