const express = require("express");

const router = express.Router();
    require("../controllers/UsuarioController");

erouter.post(
    "/usuarios",
    usuariosController.criarUsuario
);

erouter.get(
    "/usuarios",
    usuarioController.consultarUsuarios
);

erouter.post(
    "/login",
  usuarioController.loginUsuario
);

module.exports = router;
