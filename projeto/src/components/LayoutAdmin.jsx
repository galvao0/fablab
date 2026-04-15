import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AdminRoute from "./AdminRoute";

export default function LayoutAdmin() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
  }

  return (
    <AdminRoute>
      <Header onLogout={handleLogout} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </AdminRoute>
  );
}