import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function ModalRegister() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="text-center" variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Nama Lengkap" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            className="w-100 daftar-buttonx"
          >
            Sign Up
          </Button>
          <p className="text-center w-100">Sudah Punya Akun ? Login disini</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalRegister;
