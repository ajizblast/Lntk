import { Form, Button } from "react-bootstrap";
import iklan from "../assets/img/iklan.png";
import train from "../assets/img/train.png";
import transfer from "../assets/img/transfer.png";
import TicketComponent from "../components/TicketComponent";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <div
        className="pb-5"
        style={{
          background: "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)",
        }}
      >
        <div className="d-flex container justify-content-between">
          <div className="mt-5">
            <p style={{ fontWeight: "900", fontSize: "32px", color: "white" }}>
              Selamat Pagi, Ticket Seekers!
            </p>
            <p style={{ fontWeight: "400", fontSize: "24px", color: "white" }}>
              Ingin pulkam dengan Good Deal ? <br /> Masuk atau Daftar Sekarang
              !
            </p>
          </div>
          <div className="mt-5 d-realative">
            <div>
              <img src={iklan} alt="portal" />
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
      {/* Seacrh Bar */}
      <div
        className="container shadow rounded card-filter mb-5 p-absolute"
        style={{
          top: "350px",
          right: "0px",
          left: "0px",
          background: "white",
          position: "absolute",
        }}
      >
        <div className="row">
          <div className="col-3 p-0">
            <div
              className="d-flex"
              style={{
                background: "#F2F2F2",
                width: "284px",
                height: "236px",
                borderRadius: "5px",
              }}
            >
              <div
                className="mt-4"
                style={{ background: "#E67E22", width: "9px", height: "53px" }}
              ></div>
              <div
                className="d-flex mt-4"
                style={{
                  background: "#FFFFFF",
                  width: "284px",
                  height: "53px",
                }}
              >
                <img
                  className="items-center my-auto"
                  src={train}
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <h5 className="items-center ms-3 my-auto">Tiket Kereta Api</h5>
              </div>
            </div>
          </div>
          <div className="col-4">
            <p style={{ fontWeight: "400", fontSize: "24px" }}>
              Tiket Kereta Api
            </p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="label-form-input">Asal</Form.Label>
                <Form.Control type="email" placeholder="Jakarta" />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-between">
              <div>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="label-form-input">
                      Tanggal Berangkat
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="DD-MM-YY"
                      style={{ width: "110px" }}
                    />
                  </Form.Group>
                </Form>
              </div>
              <div>
                <input
                  className="form-check-input mx-2"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label
                  className="form-check-label label-form-input"
                  //   for="defaultCheck1"
                >
                  Pulang Pergi
                </label>
              </div>
            </div>
          </div>
          <div
            className="col-1"
            style={{ width: "60px", paddingLeft: "0px", paddingRight: "0px" }}
          >
            <div className="container-button">
              <button className="button-transfer">
                <img src={transfer} alt="transfer" />
              </button>
            </div>
          </div>
          <div className="col-4">
            <p
              style={{
                fontWeight: "300",
                fontSize: "18px",
                marginTop: "12px",
                color: "white",
              }}
            >
              p
            </p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="label-form-input">Tujuan</Form.Label>
                <Form.Control type="email" placeholder="Bandung" />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-between">
              <div>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="label-form-input">Dewasa</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      style={{ width: "110px" }}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </div>
              <div>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="label-form-input">Bayi</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      style={{ width: "110px" }}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </div>
              <div>
                <Button className="login-button-filter">Cari Tiket</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search Bar End */}
      {/* Tiket Item */}
      <div className="container" style={{ marginTop: "270px" }}>
        <div className="row text-center">
          <div className="col-2">Nama Kereta</div>
          <div className="col-2">Berangkat</div>
          <div className="col-1"></div>
          <div className="col-2">Tiba</div>
          <div className="col-2">Durasi</div>
          <div className="col-3">Harga Per Orang</div>
        </div>
      </div>
      <TicketComponent />
    </>
  );
};

export default HomePage;
