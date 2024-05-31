var database = require("../database/config");

async function cadastrarTipoCamping(tipoCampingAlerta) {
    try {
        var instrucao = `
            INSERT INTO campings (tipo_camping) VALUES ('${tipoCampingAlerta}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucao);
        await database.executar(instrucao);
        console.log("Tipo de camping cadastrado com sucesso!");
    } catch (error) {
        console.error("Erro ao cadastrar tipo de camping:", error);
        throw error; // Lançar o erro para que ele seja tratado no código que chama esta função
    }
}

function grafico() {
    var instrucaoSql = `
    SELECT 'CAMPING SELVAGEM' AS tipo_camping, COUNT(*) AS quantidade
    FROM campings
    WHERE tipo_camping = 'CAMPING SELVAGEM'
    UNION ALL
    SELECT 'CAMPING ORGANIZADO' AS tipo_camping, COUNT(*) AS quantidade
    FROM campings
    WHERE tipo_camping = 'CAMPING ORGANIZADO'
    UNION ALL
    SELECT 'GLAMPING' AS tipo_camping, COUNT(*) AS quantidade
    FROM campings
    WHERE tipo_camping = 'GLAMPING';
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal() {
    var instrucaoSql = `
    SELECT 'CAMPING SELVAGEM' AS tipo_camping, COUNT(*) AS quantidade
    FROM campings
    WHERE tipo_camping = 'CAMPING SELVAGEM'
    UNION ALL
    SELECT 'CAMPING ORGANIZADO' AS tipo_camping, COUNT(*) AS quantidade
    FROM campings
    WHERE tipo_camping = 'CAMPING ORGANIZADO'
    UNION ALL
    SELECT 'GLAMPING' AS tipo_camping, COUNT(*) AS quantidade
    FROM campings
    WHERE tipo_camping = 'GLAMPING';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal() {
    var instrucaoSql = `
    SELECT 'CAMPING SELVAGEM' AS tipo_camping, COUNT(*) AS quantidade
    FROM campings
    WHERE tipo_camping = 'CAMPING SELVAGEM'
    UNION ALL
    SELECT 'CAMPING ORGANIZADO' AS tipo_camping, COUNT(*) AS quantidade
    FROM campings
    WHERE tipo_camping = 'CAMPING ORGANIZADO'
    UNION ALL
    SELECT 'GLAMPING' AS tipo_camping, COUNT(*) AS quantidade
    FROM campings
    WHERE tipo_camping = 'GLAMPING';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



async function tipoMaisSelecionado() {
    const instrucaoSQL = `
        SELECT tipo_camping, COUNT(tipo_camping) AS quantidade
        FROM campings
        GROUP BY tipo_camping
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    console.log('Executando a instrução SQL: \n' + instrucaoSQL);

    try {
        const resultado = await database.executar(instrucaoSQL);
        return resultado;
    } catch (error) {
        throw error;
    }
}

async function tipoMenosSelecionado() {
    const instrucaoSQL = `   
SELECT tipo_camping, COUNT(tipo_camping) AS quantidade
FROM campings
GROUP BY tipo_camping
ORDER BY quantidade ASC
limit 1;`;
    console.log('Executando a instrução SQL: \n' + instrucaoSQL);

    try {
        const resultado = await database.executar(instrucaoSQL);
        return resultado;
    } catch (error) {
        throw error;
    }
}



module.exports = {
    cadastrarTipoCamping,
    grafico,
    buscarMedidasEmTempoReal,
    tipoMaisSelecionado,
    tipoMenosSelecionado
};
