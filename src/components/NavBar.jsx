import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/ProductsMenu">Products</NavLink>
            <NavLink to="/OrderProcessing">Order Processing</NavLink>
            <NavLink to="/CustomersAndAccountsMenu">Customers and Accounts</NavLink>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;