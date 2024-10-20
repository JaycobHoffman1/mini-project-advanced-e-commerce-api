import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerForm() {
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
          <Form.Label>New Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter new customer name"
          />
        <Form.Control.Feedback type="invalid">
            Please provide a valid name.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" md="4" controlId="validationCustom02">
        <Form.Label>New Email</Form.Label>
        <Form.Control
        required
        type="email"
        placeholder="Enter new customer email address"
        />
        <Form.Control.Feedback type="invalid">
            Please provide a valid email.
        </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-4" md="4" controlId="validationCustom02">
        <Form.Label>New Phone number</Form.Label>
        <Form.Control
        required
        type="tel"
        placeholder="Enter new customer phone number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <Form.Control.Feedback type="invalid">
            Please provide a valid phone number (XXX-XXX-XXXX).
        </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Update Customer</Button>
    </Form>
  );
}

export default CustomerForm;