import { Navbar, Button } from "react-bootstrap";
import icon from "../assets/img/icon.png";

import { Link } from "react-router-dom";

const NavbarComponents = () => {
  return (
    <div>
      <>
        <Navbar className="navbar-navbar-container">
          <div className="d-flex w-100 shadow p-2 bg-white rounded navbar-container ">
            <div className="container d-flex w-100 justify-content-between ">
              <Link to="/">
                <img src={icon} alt="Logo" style={{ height: "40px" }} />
              </Link>
              <div>
                <div>
                  <Button variant="primary" className="daftar-button">
                    Daftar
                  </Button>

                  <Button variant="primary" className="login-button">
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Navbar>
      </>
    </div>
  );
};

export default NavbarComponents;
