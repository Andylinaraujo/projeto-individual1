var database = require("../database/config")
function listar() {
    var instrucao = `
        SELECT * FROM jogo_no_catalogo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registrar(nome1, links, imagems, tag1, desq, iddapessoa) {

    var instrucao = `
        INSERT INTO jogo_no_catalogo
        (nome, links, imagem, tag, descricao, fkusuario)
        VALUES
        ('${nome1}','${links}','${imagems}','${tag1}','${desq}','${iddapessoa}');
    `;


    console.log("SQL:");
    console.log(instrucao);
    return database.executar(instrucao);
}
function buscarPorId(id){

    var instrucao = `
        SELECT *
        FROM jogo_no_catalogo
        WHERE id = ${id};
    `;

    return database.executar(instrucao);
}
module.exports = {
    registrar,
    listar,
    buscarPorId
};