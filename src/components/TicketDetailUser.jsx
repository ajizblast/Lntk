import { useState } from "react";
import { Button, Modal, Col } from "react-bootstrap";
import qrmini from "../assets/img/qr-mini.png";
import landLeft from "../assets/img/land-left.png";
import invoice from "../assets/img/invoice.png";

function ModalLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="text-center" variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Col>
            <img
              className="position-absolute start-0 top-0"
              src={landLeft}
              alt=""
            />
            <div className="d-flex mt-3">
              <div>
                <h1 className="fw-bold mt-5">INVOICE</h1>
                <p>Kode Invoice : INV0101</p>
                <div className="d-flex mt-5">
                  <div>
                    <h4 className="fw-bold">Kereta Api</h4>
                    <p className="text-secondary">Saturday, 21 Febuari 2020</p>
                  </div>
                  <div className="ms-5">
                    <img src={qrmini} alt="" />
                    <p>TCK0101</p>
                  </div>
                </div>
                <div>
                  <div>
                    <h4 className="fw-bold">Argo Wilis</h4>
                    <p>Eksekutif (H)</p>
                  </div>
                  <div className="d-flex">
                    <div className="mt-5">
                      <div
                        className="rounded-circle"
                        style={{
                          width: "16px",
                          height: "16px",
                          border: "2px solid #EC7AB7",
                        }}
                      ></div>
                      <div
                        className="ms-2 mt-3 border-start border-2"
                        style={{ width: "0px", height: "50px" }}
                      ></div>
                      <div
                        className="rounded-circle mt-3"
                        style={{
                          width: "16px",
                          height: "16px",
                          backgroundColor: "#EC7AB7",
                        }}
                      ></div>
                    </div>
                    <div className="ms-3 mt-4">
                      <div>
                        <h5 className="fw-bold">05.00</h5>
                        <h5 className="text-secondary">21 Febuari 2020</h5>
                      </div>
                      <div className="mt-5">
                        <h5 className="fw-bold">10.05</h5>
                        <h5 className="text-secondary">21 Febuari 2020</h5>
                      </div>
                    </div>
                    <div className="ms-5 mt-4">
                      <div>
                        <h5 className="fw-bold">Jakarta (GMR)</h5>
                        <h5 className="text-secondary">Stasiun Gambir</h5>
                      </div>
                      <div className="mt-5">
                        <h5 className="fw-bold">Surabaya (SBY)</h5>
                        <h5 className="text-secondary">Stasiun Surabaya</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img className="" src={invoice} alt="" />
            </div>
            <div className="text-center">
              <p>upload payment proof</p>
            </div>
          </Col>
        </Modal.Header>
        <Modal.Body>
          <table className="w-100">
            <thead>
              <tr>
                <th>No. Tanda Pengenal</th>
                <th>Nama Pemesan</th>
                <th>No. Handphone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td className="text-secondary">31175033003970001</td>
                <td className="text-secondary">Anto</td>
                <td className="text-secondary">083896833112</td>
                <td className="text-secondary">anto@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <div className="mt-3 w-100" style={{ background: "#E6E6E6" }}>
            <div className="d-flex justify-content-between align-items-center py-3">
              <h5 className="ms-3 mb-0 fw-bold">Total</h5>
              <h5 className="me-3 mb-0 text-danger fw-bold">Rp.250.000</h5>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogin;
