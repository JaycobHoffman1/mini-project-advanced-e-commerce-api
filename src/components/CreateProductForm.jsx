import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductForm() {
  const [validated, setValidated] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);

    // check for empty inputs
    if (!newProduct.name.trim() || !newProduct.price.trim()) {
      setError("All fields must be filled out correctly.");
      setSuccess("");
      return;
    }

    if (form.checkValidity() === false) {
      return;
    }

    await createNewProduct();
  };

  const createNewProduct = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/products", newProduct);
      setProducts((prev) => [...prev, response.data]); // append new product 
      setNewProduct({ name: "", price: "" }); // reset form
      setSuccess("Product created successfully!");
      setError("");
      setValidated(false);
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Error creating product. Please try again.");
      setSuccess("");
    }
  };

  return (
    <Form className="mx-5" noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-4" md="4" controlId="validationCustom01">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter product name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
        <Form.Control.Feedback type="invalid">
            Please provide a valid product name.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" md="4" controlId="validationCustom01">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter product price"
            pattern="[0-9]{1,10}.[0-9]{2}"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        <Form.Control.Feedback type="invalid">
            Please provide a valid decimal number for a price.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Create Product</Button>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && <div className="alert alert-success mt-3">{success}</div>}
    </Form>
  );
}

export default ProductForm;