var database = require("../database/config")
function votar(fkUsuario,fkJogo,tipo){

    var instrucao = `
        INSERT INTO avaliacao
        (tipo,fkUsuario,fkJogo)
        VALUES
        ('${tipo}',${fkUsuario},${fkJogo})

        ON DUPLICATE KEY UPDATE
            tipo='${tipo}',
            dtAvaliacao=CURRENT_TIMESTAMP;
    `;

    return database.executar(instrucao);
}
function contagem(idJogo){

    var instrucao = `
        SELECT
            SUM(CASE WHEN tipo='L' THEN 1 ELSE 0 END) AS likes,
            SUM(CASE WHEN tipo='D' THEN 1 ELSE 0 END) AS dislikes
        FROM avaliacao
        WHERE fkJogo = ${idJogo};
    `;

    return database.executar(instrucao);
}
function topMes() {

    var instrucao = `
        SELECT
            j.nome,
            SUM(
                CASE
                    WHEN a.tipo = 'L' THEN 1
                    WHEN a.tipo = 'D' THEN -1
                END
            ) AS pontuacao
        FROM avaliacao a
        JOIN jogo_no_catalogo j
            ON j.id = a.fkJogo
        WHERE a.dtAvaliacao >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
        GROUP BY j.id, j.nome
        ORDER BY pontuacao DESC
        LIMIT 5;
    `;

    return database.executar(instrucao);
}

function topSemana() {

    var instrucao = `
        SELECT
            j.nome,
            SUM(
                CASE
                    WHEN a.tipo = 'L' THEN 1
                    WHEN a.tipo = 'D' THEN -1
                END
            ) AS pontuacao
        FROM avaliacao a
        JOIN jogo_no_catalogo j
            ON j.id = a.fkJogo
        WHERE a.dtAvaliacao >= DATE_SUB(NOW(), INTERVAL 7 DAY)
        GROUP BY j.id, j.nome
        ORDER BY pontuacao DESC
        LIMIT 5;
    `;

    return database.executar(instrucao);
}
module.exports = {
    votar,
    contagem,
    topMes,
    topSemana
};