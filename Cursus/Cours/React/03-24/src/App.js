import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import "./App.css"
import Nav from "./Components/Nav";
import Admin from "./Components/admin/Admin";
import Home from "./Components/home";
import Error from "./Components/404";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AddProduct from "./Components/admin/AddProduct";
import ModProduct from "./Components/admin/ModProduct";
import ItemView from "./Components/ItemView";
import Login from "./Components/admin/Login";
import PrivateRoute from "./Components/admin/PrivateRoute";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element= {<Nav />}>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="ItemView" element={<ItemView/>} />
            </Route> 
            <Route path="/Admin" element={<PrivateRoute><Admin /></PrivateRoute>} /> 
            <Route path="AddProduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
            <Route path="ModifProduct" element={<PrivateRoute><ModProduct /></PrivateRoute>} />
            <Route path="*" element={<Error/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
