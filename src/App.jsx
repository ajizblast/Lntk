import { Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import NavbarComponents from "./components/NavbarComponents";
import HomePage from "./pages/HomePage";
import ModalLogin from "./components/ModalLogin";
import ModalRegister from "./components/ModalRegister";
import MyTicket from "./pages/MyTicket";
import MyTicketApprove from "./pages/MyTicketApprove";
import Payment from "./pages/Payment";
import AddStation from "./pages/AddStation";
import AddTicket from "./pages/AddTicket";
import AdminListStation from "./pages/AdminListStation";
import IndexAdmin from "./pages/IndexAdmin";
import EditStatus from "./components/EditStatus";
import TicketDetailUser from "./components/TicketDetailUser";
import TicketComponent from "./components/TicketComponent";

function App() {
  return (
    <div>
      <NavbarComponents />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/my-ticket" Component={MyTicket} />
        <Route path="/my-ticket-approve" Component={MyTicketApprove} />
        <Route path="/payment" Component={Payment} />
        <Route path="/add-station" Component={AddStation} />
        <Route path="/add-ticket" Component={AddTicket} />
        <Route path="/admin-list-station" Component={AdminListStation} />
        <Route path="/admin" Component={IndexAdmin} />
        {/* route nanti dihapus */}
        <Route path="/tiket-kom" Component={TicketComponent} />
        <Route path="/modal-login" Component={ModalLogin} />
        <Route path="/modal-register" Component={ModalRegister} />
        <Route path="/edit-status" Component={EditStatus} />
        <Route path="/tiket-user" Component={TicketDetailUser} />
        {/* route nanti dihapus */}
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
