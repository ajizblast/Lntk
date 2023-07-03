import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import landLeft from "../assets/img/land-left.png";

function EditStatus() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="text-center" variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <img className="position-absolute" src={landLeft} alt="" />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="1" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Anto" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Surabaya - Jakarta" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="bca.jpg" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Approved" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            className="w-100 login-button"
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditStatus;
