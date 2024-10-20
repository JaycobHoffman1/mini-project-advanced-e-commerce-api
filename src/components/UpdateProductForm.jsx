import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateProductForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form className="mx-5" noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-4" md="4" controlId="validationCustom01">
          <Form.Label>New Product Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter new product name"
          />
        <Form.Control.Feedback type="invalid">
            Please provide a valid product name.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" md="4" controlId="validationCustom01">
          <Form.Label>New Product Price</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter new product price"
            pattern="[0-9]{1,2}.[0-9]{2}"
          />
        <Form.Control.Feedback type="invalid">
            Please provide a valid decimal number for a price.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Update Product</Button>
    </Form>
  );
}

export default UpdateProductForm;