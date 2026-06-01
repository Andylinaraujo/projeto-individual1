var express = require("express");
var router = express.Router();

var catalogoController = require("../controllers/catalogoController");

router.post("/registrar", function (req, res) {
    catalogoController.registrar(req, res);
})

router.get("/listar", function (req, res) {
    catalogoController.listar(req, res);
});
router.get("/buscar/:id", function(req, res){
    catalogoController.buscarPorId(req, res);
});
module.exports = router;