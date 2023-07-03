import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function ModalLogin() {
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
          <Modal.Title className="text-center w-100">LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Username" />
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
            className="w-100 login-button"
          >
            Login
          </Button>
          <p className="text-center w-100">Belum Punya Akun ? Klik disini</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogin;
