import React from "react";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomersAndAccountsMenu() {
    return (
        <div className="m-5">
            <h1 className="display-6 mb-4">Customers and Accounts Menu</h1>
            <ul>
                <li className="list-unstyled"><NavLink to="/CreateCustomerForm">Create Customer Form</NavLink></li>
                <li className="list-unstyled"><NavLink to="/UpdateCustomerForm">Update Customer Form</NavLink></li>
                <li className="list-unstyled"><NavLink to="/ReadCustomerDetails">Read Customer Details</NavLink></li>
                <li className="list-unstyled"><NavLink to="/DeleteCustomerInformation">Delete Customer Information</NavLink></li>
            </ul>
        </div>
    )
}

export default CustomersAndAccountsMenu;