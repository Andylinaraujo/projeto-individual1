var avaliacaoModel = require("../models/avaliacaoModel");

function votar(req,res){

    var fkJogo = req.body.fkJogo;
    var fkUsuario = req.body.fkUsuario;
    var tipo = req.body.tipo;

    avaliacaoModel.votar(
        fkUsuario,
        fkJogo,
        tipo
    )
    .then(resultado=>{
        res.json(resultado);
    })
    .catch(erro=>{
        console.log(erro);
        res.status(500).json(erro);
    });
}
function contagem(req, res){

    var idJogo = req.params.idJogo;

    avaliacaoModel.contagem(idJogo)
    .then(resultado => {

        res.json(resultado[0]);

    })
    .catch(erro => {

        console.log(erro);
        res.status(500).json(erro);

    });
}
function topMes(req, res){

    avaliacaoModel.topMes()
    .then(resultado => {
        res.json(resultado);
    })
    .catch(erro => {
        console.log(erro);
        res.status(500).json(erro);
    });

}

function topSemana(req, res){

    avaliacaoModel.topSemana()
    .then(resultado => {
        res.json(resultado);
    })
    .catch(erro => {
        console.log(erro);
        res.status(500).json(erro);
    });

}
module.exports = {
    votar,
    contagem,
    topMes,
    topSemana
};