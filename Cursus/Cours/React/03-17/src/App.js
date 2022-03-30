import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import Navbar from './components/navbar';

const App = () => {
  return (
    <>
     
      <BrowserRouter> 
        <Routes>
          <Route element= {<Navbar />}>
            <Route path="/" element={<Comp1 />} />
            <Route path="C2" element={<Comp2 />} />
            <Route path="C2/:reference" element={<Comp2 />} />  
          </Route>  
          <Route path="*" element={<Comp3/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
