const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.listarUsuarios);
router.get("/:id", usuarioController.buscarUsuarioPorId);
router.put("/:id", usuarioController.atualizarUsuario);
router.put("/:id/senha", usuarioController.alterarSenhaUsuario);
router.put("/:id/desativar", usuarioController.desativarUsuario);
router.put("/:id/reativar", usuarioController.reativarUsuario);
router.put("/:id/perfil", usuarioController.atualizarPerfil);

module.exports = router;