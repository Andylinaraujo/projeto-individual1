var database = require("../database/config")
function listar() {
    var instrucao = `
        SELECT * FROM jogo_no_catalogo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registrar(nome, links, imagem, tag, descricao) {
    var instrucao = `
        INSERT INTO jogo_no_catalogo (nome, links, imagem, tag, descricao) 
        VALUES ('${nome}','${links}','${imagem}','${tag}','${descricao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    registrar,
    listar
};