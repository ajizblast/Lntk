import { Card, Button, Container, Row, Col } from "react-bootstrap";
import landLeft from "../assets/img/land-left.png";
import QrMini from "../assets/img/qr-mini.png";

const Payment = () => {
  return (
    <div>
      <Container className="pt-5">
        <Row>
          <Col>
            <div className="ms-5 mt-5 d-flex">
              <div className="">
                <h1>Invoice</h1>
                <div className="">
                  <Card
                    style={{
                      marginTop: "24px",
                      width: "600px",
                      height: "154px",
                    }}
                  >
                    <div>
                      <img
                        className="position-absolute"
                        src={landLeft}
                        alt=""
                      />
                    </div>
                    <div className="position-absolute bottom-0 m-2">
                      <table className="">
                        <thead className="">
                          <tr className="border-bottom">
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
                            <td className="text-secondary">
                              31175033003970001
                            </td>
                            <td className="text-secondary">Anto Dalangs</td>
                            <td className="text-secondary">083896833112</td>
                            <td className="text-secondary">
                              antodal@gmail.com
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                  <div className="d-flex">
                    <div className="mt-3">
                      <h2>Rincian Harga</h2>
                      <Card style={{ width: "446px", height: "137px" }}>
                        <div className="d-flex my-auto justify-content-between">
                          <h5 className="ms-5">apaloh</h5>
                          <h5 className="me-5">apaloh</h5>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ background: "#E6E6E6" }}
                        >
                          <h5 className="ms-5 mt-2">Total</h5>
                          <h5 className="fw-bold me-5 mt-2">ini dia</h5>
                        </div>
                      </Card>
                      <Button
                        type="submit"
                        variant="outline-light"
                        className="fw-bold mt-3 mb-5"
                        style={{
                          width: "446px",
                          height: "auto",
                          background:
                            "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)",
                        }}
                      >
                        Bayar Sekarang
                      </Button>
                    </div>
                    <div className="ms-5 mt-5"></div>
                  </div>
                </div>
              </div>
              <div
                className="ms-3 mt-5"
                style={{
                  background: "#F5F5F5",
                  width: "447px",
                  height: "414px",
                }}
              >
                <div
                  style={{
                    background: "#D0D0D0",
                    width: "447px",
                    height: "115px",
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="mt-3 ms-4">
                      <h1 className="fw-bold">Kereta Api</h1>
                      <h5 className="text-sm font-semibold text-secondary"></h5>
                    </div>
                    <div className="mt-4 me-3">
                      <img className="" src={QrMini} alt="" />
                      <p>INV0101</p>
                    </div>
                  </div>
                </div>
                <div className="ms-4 mt-3">
                  <div>
                    <h3 className="fw-bold">jangancoba dulu</h3>
                    <p className="text-secondary">jangancoba dulu</p>
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
                    <div className="ms-4 mt-4">
                      <div>
                        <h5 className="fw-bold">coba dulu</h5>
                        <h5 className="text-secondary">iya nih</h5>
                      </div>
                      <div className="mt-5">
                        <h5 className="fw-bold">coba dulu</h5>
                        <h5 className="text-secondary">iya nih</h5>
                      </div>
                    </div>
                    <div className="ms-4 mt-4">
                      <div>
                        <h5 className="fw-bold">dimana</h5>
                        <h5 className="text-secondary">dimana</h5>
                      </div>
                      <div className="mt-5">
                        <h5 className="fw-bold">dimana</h5>
                        <h5 className="text-secondary">dimana</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
