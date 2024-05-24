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

module.exports = {
    cadastrarTipoCamping
};
