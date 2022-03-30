import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import {NavLink, Link, Outlet} from 'react-router-dom'

const Nav = () => {
    return (
        <>
        <Navbar bg="secondary">
          <Container>
            <Navbar.Brand><NavLink to="/"><Button variant="outline-dark" >Home</Button></NavLink></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Brand><NavLink to="/Admin"><Button variant="outline-dark" >Admin</Button></NavLink></Navbar.Brand>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </>
    );
};

export default Nav;