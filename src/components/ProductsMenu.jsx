import React from "react";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductsMenu() {
    return (
        <div className="m-5">
            <h1 className="display-6 mb-4">Products Menu</h1>
            <ul>
                <li className="list-unstyled"><NavLink to="/CreateProductForm">Create Product Form</NavLink></li>
                <li className="list-unstyled"><NavLink to="/UpdateProductForm">Update Product Form</NavLink></li>
                <li className="list-unstyled"><NavLink to="/ReadProductDetails">Read Product Details</NavLink></li>
                <li className="list-unstyled"><NavLink to="/ListAllProducts">List All Products</NavLink></li>
                <li className="list-unstyled"><NavLink to="/DeleteProductInformation">Delete Product Information</NavLink></li>
            </ul>
        </div>
    )
}

export default ProductsMenu;