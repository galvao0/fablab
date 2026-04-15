//layout comum para qualquer usuário logado
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AuthenticatedRoute from "./AuthenticatedRoute";

export default function LayoutAutenticado() {
  const navigate = useNavigate();
  const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login");
  }

  return (
    <AuthenticatedRoute>
      <div className="app-layout">
        <Header usuario={usuarioLogado} onLogout={handleLogout} />

        <main className="app-main">
          <Outlet />
        </main>

        <Footer />
      </div>
    </AuthenticatedRoute>
  );
}