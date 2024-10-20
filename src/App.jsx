import React from "react";
import Home from "./components/home";
import NavigationBar from "./components/NavBar";
import ProductsMenu from "./components/ProductsMenu";
import OrderProcessing from "./components/OrderProcessing";
import CustomerForm from "./components/CreateCustomerForm";
import UpdateCustomerForm from "./components/UpdateCustomerForm";
import ReadCustomerDetails from "./components/ReadCustomerDetails";
import DeleteCustomerInformation from "./components/DeleteCustomerInformation";
import ProductForm from "./components/CreateProductForm";
import UpdateProductForm from "./components/UpdateProductForm";
import ReadProductDetails from "./components/ReadProductDetails";
import ListAllProducts from "./components/ListAllProducts";
import DeleteProductInformation from "./components/DeleteProductInformation";
import { Route, Routes } from "react-router-dom";
import CustomersAndAccountsMenu from "./components/CustomersAndAccountsMenu";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ProductsMenu/" element={<ProductsMenu />}/>
        <Route path="/OrderProcessing" element={<OrderProcessing />}/>
        <Route path="/CustomersAndAccountsMenu/" element={<CustomersAndAccountsMenu />}/>
        <Route path="/CreateCustomerForm" element={<CustomerForm />}/>
        <Route path="/UpdateCustomerForm" element={<UpdateCustomerForm />}/>
        <Route path="/ReadCustomerDetails" element={<ReadCustomerDetails />}/>
        <Route path="/DeleteCustomerInformation" element={<DeleteCustomerInformation />}/>
        <Route path="/CreateProductForm" element={<ProductForm />}/>
        <Route path="/UpdateProductForm" element={<UpdateProductForm/>}/>
        <Route path="/ReadProductDetails" element={<ReadProductDetails/>}/>
        <Route path="/ListAllProducts" element={<ListAllProducts/>}/>
        <Route path="/DeleteProductInformation" element={<DeleteProductInformation />}/>
      </Routes>
    </>
  )
}

export default App;