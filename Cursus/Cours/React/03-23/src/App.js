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


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element= {<Nav />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/Admin" element={<Admin />} /> 
            <Route path="AddProduct" element={<AddProduct/>} />
            <Route path="*" element={<Error/>} />
            <Route path="ItemView" element={<ItemView/>} />
            <Route path="ModifProduct" element={<ModProduct/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
