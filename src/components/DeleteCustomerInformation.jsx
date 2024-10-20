import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteCustomer() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Form className="mx-5" noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-4" md="4" controlId="validationCustom01">
            <Form.Label>Enter the ID of the customer you wish to delete</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Enter ID"
            />
            <Form.Control.Feedback type="invalid">
                Please provide a valid ID.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" onClick={handleShow}>Delete Customer</Button>
        </Form>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this customer?</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Yes
            </Button>
            <Button variant="danger" onClick={handleClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

export default DeleteCustomer;