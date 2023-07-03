import { Form, Button } from "react-bootstrap";

function AddStation() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="fw-bold">Add Station</h1>
        <Form className="mt-5">
          <Form.Group className="mb-3">
            <Form.Control type="text" name="name" placeholder="Station Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" name="city" placeholder="City" />
          </Form.Group>

          <Button
            className="mt-5"
            variant="outline-light fw-bold"
            type="submit"
            style={{
              width: "535px",
              height: "50px",
              background: "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)",
              marginLeft: "282px",
            }}
          >
            Save
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddStation;
