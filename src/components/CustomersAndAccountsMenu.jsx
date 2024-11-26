import React from "react";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomersAndAccountsMenu() {
    return (
        <div className="m-5">
            <h1 className="display-6 mb-4">Customers and Accounts Menu</h1>
            <ul>
                <li className="list-unstyled"><NavLink to="/CreateCustomerForm">Add Customer</NavLink></li>
                <li className="list-unstyled"><NavLink to="/ListAllCustomers">View Customers</NavLink></li>
            </ul>
        </div>
    )
}

export default CustomersAndAccountsMenu;