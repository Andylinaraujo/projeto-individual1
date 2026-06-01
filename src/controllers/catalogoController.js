var catalogoModel = require("../models/catalogoModel")
function listar(req, res) {
    catalogoModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarPorId(req, res){

    var id = req.params.id;

    catalogoModel.buscarPorId(id)
    .then(resultado => {
        res.json(resultado);
    })
    .catch(erro => {
        res.status(500).json(erro);
    });
}
function registrar(req, res) {
    try {
        console.log("BODY:", req.body);

        var nome1 = req.body.nomeServer1;
        var desq = req.body.descricaoServer;
        var tag1 = req.body.tagServer;
        var imagems = req.body.imagemServer;
        var links = req.body.linksServer;

        var iddapessoa = req.body.idUsuarioServer;

        console.log(nome1);
        console.log(desq);
        console.log(tag1);
        console.log(imagems);
        console.log(links);

        catalogoModel.registrar(
            nome1,
            links,
            imagems,
            tag1,
            desq,
            iddapessoa
        )
        .then(function () {
            res.status(200).send("OK");
        })
        .catch(function (erro) {
            console.log("ERRO MODEL:");
            console.log(erro);
            res.status(500).json(erro);
        });

    } catch (erro) {
        console.log("ERRO CONTROLLER:");
        console.log(erro);
        res.status(500).json(erro);
    }
}

module.exports = {
    listar,
    registrar,
    buscarPorId
}