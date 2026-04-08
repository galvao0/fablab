import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (usuario?.tipo !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}