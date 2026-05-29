var express = require("express");
var router = express.Router();

var catalogoController = require("../controllers/catalogoController");

router.post("/registrar", function (req, res) {
    catalogoController.registrarjg(req, res);
})

router.post("/listar", function (req, res) {
    catalogoController.listarjg(req, res);
});

module.exports = router;