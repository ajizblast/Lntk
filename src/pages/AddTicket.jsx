import { Form, Button } from "react-bootstrap";
const AddTicket = () => {
  return (
    <div>
      <>
        <div className="container mt-5">
          <h1 className="fw-bold">Add Ticket</h1>
          <Form className="mt-5">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="train_name"
                placeholder="Nama Kereta"
              />
            </Form.Group>

            <Form.Select
              className="mb-3"
              name="train_class"
              aria-label="Default select example"
            >
              <option hidden>Jenis Kereta</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Bisnis">Bisnis</option>
              <option value="Eksekutif">Eksekutif</option>
            </Form.Select>

            <Form.Group className="mb-3">
              <Form.Control
                type="date"
                name="departure_date"
                placeholder="Tanggal Keberangkatan"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="time"
                name="start_time"
                placeholder="Jam Keberangkatan"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="time"
                name="arrival_time"
                placeholder="Jam Tiba"
              />
            </Form.Group>

            <Form.Select
              className="mb-3"
              aria-label="Default select example"
              name="start_station_id"
            >
              <option hidden>Start Station</option>
              {/* {stations?.map((item) => (
                <option key={item.id} value={item?.id}>
                  {item.name} {item.city}
                </option>
              ))} */}
            </Form.Select>

            <Form.Select
              className="mb-3"
              aria-label="Default select example"
              name="destination_station_id"
            >
              <option hidden>Tujuan Station</option>
              {/* {stations?.map((item) => (
                <option key={item.id} value={item?.id}>
                  {item?.name} {item?.city}
                </option>
              ))} */}
            </Form.Select>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="price"
                min={0}
                placeholder="Harga Tiket"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" name="qty" min={0} placeholder="Qty" />
            </Form.Group>

            <Button
              className="mt-5"
              variant="outline-light fw-bold"
              type="submit"
              style={{
                width: "535px",
                height: "50px",
                background:
                  "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)",
                marginLeft: "282px",
              }}
            >
              Save
            </Button>
          </Form>
        </div>
      </>
    </div>
  );
};

export default AddTicket;
