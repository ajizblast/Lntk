import { Container, Row, Col, Card, Button } from "react-bootstrap";

import landLeft from "../assets/img/land-left.png";

const MyTicket = () => {
  return (
    <div>
      <Container className="pt-5">
        <Row>
          <Col>
            <h2>Tiket Saya</h2>
          </Col>
        </Row>
        <Card className="text-center ">
          <img className="position-absolute" src={landLeft} alt="" />
          <Card.Body>
            <div className="">
              <div className="top-0 end-0 position-absolute p-4">
                <h1 className="fw-bold">Kereta Api</h1>
                <h5 className="text-secondary">Saturday, 21 Febuari 2020</h5>
              </div>
              <div className="d-flex">
                <div>
                  <h1 className="ms-5 mt-5 fw-bold">Argo Wilis</h1>
                  <h5 className="ms-5 mt-3 text-start">Eksekutif (H)</h5>
                  <div
                    className="font-size-14px text-center rounded ms-5 mt-3"
                    style={{
                      width: "69px",
                      height: "24px",
                      color: "#FF9900",
                      backgroundColor: "rgba(255,153,0,0.125)",
                    }}
                  >
                    Pending
                  </div>
                </div>
                <div className="mt-5 ms-5">
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
                <div className="ms-5 mt-4 text-start">
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
              <div className="d-flex border-0 justify-content-between">
                <table className=" ms-3 mt-4 w-100">
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
                      <td className="text-secondary">31175033003970001</td>
                      <td className="text-secondary">Anto Dalangs</td>
                      <td className="text-secondary">083896833112</td>
                      <td className="text-secondary">antodal@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
                <div className="">
                  <Button
                    className="mt-5 ms-4 me-3 "
                    variant="outline-light text-white fw-bold"
                    style={{
                      width: "206px",
                      height: "40px",
                      background:
                        "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)",
                    }}
                  >
                    Pay Now
                  </Button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default MyTicket;
