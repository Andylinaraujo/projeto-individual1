var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.post("/votar", function(req, res){
    avaliacaoController.votar(req,res);
});
router
router.get("/contagem/:idJogo", function(req, res){
    avaliacaoController.contagem(req, res);
});
router.get("/topMes", function(req, res){
    avaliacaoController.topMes(req, res);
});

router.get("/topSemana", function(req, res){
    avaliacaoController.topSemana(req, res);
});
module.exports = router;