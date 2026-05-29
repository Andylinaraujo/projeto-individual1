var catalogoModel = require("../models/catalogoModels")
function listar(req, res) {
    catalogoModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function registrar(req, res) {
    var nome = req.body.nome;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    catalogoModel.registrar(nome, links, imagem, tag, descricao).then(function(resposta){
        res.status(200).send("jogo catalogado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    registrar
}