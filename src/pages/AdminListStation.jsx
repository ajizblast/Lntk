import { Table } from "react-bootstrap";

const AdminListStation = () => {
  return (
    <div>
      <>
        <div className="container mt-5">
          <h1>List Stations</h1>
          <div className="mt-5">
            <Table
              striped
              className="m-auto w-100"
              style={{ border: "none", width: "100%" }}
            >
              <thead className="">
                <tr>
                  <th>No</th>
                  <th>Station City</th>
                  <th>Station Name</th>
                </tr>
              </thead>
              <tbody>
                return (
                <tr>
                  <td>uiuiui</td>
                  <td>uiuiui</td>
                  <td>uiuiui</td>
                  <td className="">
                    <div className="d-flex">
                      <div>
                        <img
                          src="/images/IconSearch.png"
                          alt=""
                          className=""
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <div>
                        <img
                          src="/images/IconTrash.png"
                          alt=""
                          className="ms-5"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                );
              </tbody>
            </Table>
          </div>
        </div>
      </>
    </div>
  );
};

export default AdminListStation;
