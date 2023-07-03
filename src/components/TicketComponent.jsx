import { Container, Card } from "react-bootstrap";
import arrow from "../assets/img/Arrow.png";

const TicketComponent = () => {
  return (
    <div>
      <Container>
        <Card className="my-5 shadow">
          <div className="d-flex justify-content-around align-items-center mt-3">
            <div className="">
              <h5 className="fw-bold">Argo Wilis</h5>
              <h5 className="text-secondary">Eksekutif (H)</h5>
            </div>
            <div className="">
              <h5 className="fw-bold">05.00</h5>
              <h5 className="text-secondary">Gambir</h5>
            </div>
            <div className="flex align-items-center justify-content-center">
              <img
                src={arrow}
                alt=""
                className=""
                style={{ marginBottom: "12px" }}
              />
            </div>
            <div>
              <h5 className="fw-bold">10.05</h5>
              <h5 className="text-secondary">Surabaya</h5>
            </div>
            <div>
              <h5 className="fw-bold">5j 05m</h5>
            </div>
            <div>
              <h5 className="fw-bold text-danger">Rp. 250.000</h5>
            </div>
          </div>
        </Card>

        <Card className="my-5 shadow">
          <div className="d-flex justify-content-around align-items-center mt-3">
            <div className="">
              <h5 className="fw-bold">Argo Wilis</h5>
              <h5 className="text-secondary">Eksekutif (H)</h5>
            </div>
            <div className="">
              <h5 className="fw-bold">05.00</h5>
              <h5 className="text-secondary">Gambir</h5>
            </div>
            <div className="flex align-items-center justify-content-center">
              <img
                src={arrow}
                alt=""
                className=""
                style={{ marginBottom: "12px" }}
              />
            </div>
            <div>
              <h5 className="fw-bold">10.05</h5>
              <h5 className="text-secondary">Surabaya</h5>
            </div>
            <div>
              <h5 className="fw-bold">5j 05m</h5>
            </div>
            <div>
              <h5 className="fw-bold text-danger">Rp. 250.000</h5>
            </div>
          </div>
        </Card>

        <Card className="my-5 shadow">
          <div className="d-flex justify-content-around align-items-center mt-3">
            <div className="">
              <h5 className="fw-bold">Argo Wilis</h5>
              <h5 className="text-secondary">Eksekutif (H)</h5>
            </div>
            <div className="">
              <h5 className="fw-bold">05.00</h5>
              <h5 className="text-secondary">Gambir</h5>
            </div>
            <div className="flex align-items-center justify-content-center">
              <img
                src={arrow}
                alt=""
                className=""
                style={{ marginBottom: "12px" }}
              />
            </div>
            <div>
              <h5 className="fw-bold">10.05</h5>
              <h5 className="text-secondary">Surabaya</h5>
            </div>
            <div>
              <h5 className="fw-bold">5j 05m</h5>
            </div>
            <div>
              <h5 className="fw-bold text-danger">Rp. 250.000</h5>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default TicketComponent;
