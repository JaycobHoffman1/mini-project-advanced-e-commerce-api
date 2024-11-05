import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function ListAllProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:5000/products"); 
          console.log(response.data);
          setProducts(response.data);
          setError("");
        } catch (error) {
          console.error("Error listing products:", error);
          setError("Error listing products. Please try again.");
          setSuccess("");
        } finally {
          setLoading(false);
        }
      };
    
    useEffect(() => {
      console.log("This is running!")
      fetchProducts();
    } , []);

    if (loading) { return <p>Loading products...</p>; }
    
    return (
        <div>
          {
            products.map((product) => {
              <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            })
          }
        </div>
    )
}

export default ListAllProducts;