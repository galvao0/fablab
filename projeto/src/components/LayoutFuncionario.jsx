import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FuncionarioRoute from "./FuncionarioRoute";
import "../App.css";

export default function LayoutFuncionario() {
  const navigate = useNavigate();
  const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
  }

  return (
    <FuncionarioRoute>
      <div className="app-layout">
        <Header usuario={usuarioLogado} onLogout={handleLogout} />

        <main className="app-main">
          <Outlet />
        </main>

        <Footer />
      </div>
    </FuncionarioRoute>
  );
}