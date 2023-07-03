import {} from "react-bootstrap";
const FooterComponent = () => {
  return (
    <div>
      {" "}
      <>
        <div
          style={{
            background: "linear-gradient(90deg, #EC7AB7 -0.6%, #EC7A7A 100%)",
            width: "100%",
            height: "40px",
            marginTop: "100px ",
          }}
        >
          <div className="container mx-auto text-center p-2 fw-bold">
            <div className="row">
              <div className="col-12">
                Powered by: Dumbways.id | Chahyo Purnomo Aji
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default FooterComponent;
