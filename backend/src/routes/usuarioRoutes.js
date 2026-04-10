const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.listarUsuarios);
router.get("/:id", usuarioController.buscarUsuarioPorId);
router.put("/:id", usuarioController.atualizarUsuario);
router.put("/:id/senha", usuarioController.alterarSenhaUsuario);
router.delete("/:id", usuarioController.excluirUsuario);

module.exports = router;