import { Table, Container, Col } from "react-bootstrap";
import trash from "../assets/img/trash.png";
import search from "../assets/img/search.png";
import edit from "../assets/img/edit.png";
import { Link } from "react-router-dom";

const IndexAdmin = () => {
  return (
    <div>
      <Container>
        <Col className="pt-5">
          <h1>List Transaksi</h1>
          <Table responsive="md" className="pt-5">
            <thead>
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Ticket</th>
                <th>Bukti Transfer</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">1</td>
                <td className="py-3">Anto</td>
                <td className="py-3">Surabaya - Jakarta</td>
                <td className="py-3">bni.jpg</td>
                <td className="text-success py-3 fw-bold">Approved</td>
                <td className="py-3">
                  <Link to={"/payment"}>
                    <img src={search} alt="search" className="pe-3" />
                  </Link>
                  <Link to={"/"}>
                    <img src={edit} alt="edit" className="pe-3" />
                  </Link>
                  <Link to={"/"}>
                    <img src={trash} alt="trash" className="pe-3" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-3">2</td>
                <td className="py-3">Jakarta - Malang</td>
                <td className="py-3">permata.jpg</td>
                <td className="py-3">Bastian Simanungkalit</td>
                <td className="text-warning py-3 fw-bold">Pending</td>
                <td className="py-3">
                  <Link to={"/payment"}>
                    <img src={search} alt="search" className="pe-3" />
                  </Link>
                  <Link to={"/"}>
                    <img src={edit} alt="edit" className="pe-3" />
                  </Link>
                  <Link to={"/"}>
                    <img src={trash} alt="trash" className="pe-3" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-3">3</td>
                <td className="py-3">Amin Subagiyo</td>
                <td className="py-3">Jakarta - Bandung</td>
                <td className="py-3">permata.jpg</td>
                <td className="text-danger py-3 fw-bold">Cancel</td>
                <td className="py-3">
                  <Link to={"/payment"}>
                    <img src={search} alt="search" className="pe-3" />
                  </Link>
                  <Link to={"/"}>
                    <img src={edit} alt="edit" className="pe-3" />
                  </Link>
                  <Link to={"/"}>
                    <img src={trash} alt="trash" className="pe-3" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Container>
    </div>
  );
};

export default IndexAdmin;
