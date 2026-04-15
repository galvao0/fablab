import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomeRedirect from "./components/HomeRedirect";
import LayoutFuncionario from "./components/LayoutFuncionario";
import LayoutAdmin from "./components/LayoutAdmin";

import ListaOS from "./pages/ListaOS";
import CadastroOS from "./pages/CadastroOS";
import DetalheOS from "./pages/DetalheOS";
import EditarOS from "./pages/EditarOS";

import ListaUsuarios from "./pages/ListaUsuarios";
import CadastroUsuario from "./pages/CadastroUsuario";
import EditarUsuario from "./pages/EditarUsuario";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomeRedirect />} />

      <Route path="/ordens" element={<LayoutFuncionario />}>
        <Route index element={<ListaOS />} />
        <Route path="nova" element={<CadastroOS />} />
        <Route path=":id" element={<DetalheOS />} />
        <Route path=":id/editar" element={<EditarOS />} />
      </Route>

      <Route path="/usuarios" element={<LayoutAdmin />}>
        <Route index element={<ListaUsuarios />} />
        <Route path="novo" element={<CadastroUsuario />} />
        <Route path=":id/editar" element={<EditarUsuario />} />
      </Route>
    </Routes>
  );
}