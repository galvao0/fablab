import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FuncionarioRoute from "./FuncionarioRoute";

export default function LayoutFuncionario() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
  }

  return (
    <FuncionarioRoute>
      <Header onLogout={handleLogout} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </FuncionarioRoute>
  );
}