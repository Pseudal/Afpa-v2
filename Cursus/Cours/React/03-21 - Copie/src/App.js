import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import Nav from "./Components/Nav";
import Admin from "./Components/admin/Admin";
import Home from "./Components/home";
import Error from "./Components/404";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AddProduct from "./Components/admin/AddProduct";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element= {<Nav />}>
              <Route path="/" element={<Home />} />
              <Route path="/Admin" element={<Admin />} />
            </Route> 
            <Route path="AddProduct" element={<AddProduct/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
