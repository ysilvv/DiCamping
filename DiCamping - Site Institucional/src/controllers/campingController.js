var campingModel = require("../models/campingModel");

function cadastrarTipoCamping(req, res) {
    var tipoCamping = req.body.tipoCampingServer;

    if (tipoCamping == undefined) {
        res.status(400).send("O tipo de camping está indefinido!");
    }

    campingModel.cadastrarTipoCamping(tipoCamping).then(function (resposta) {
        res.status(200).send("Tipo de camping cadastrado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function grafico(req, res) {
    campingModel.grafico()
        .then((resultado) => {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`);
            res.status(200).json(resultado);
        })
        .catch((error) => {
            console.error("Erro ao obter dados de ranking:", error);
            res.status(500).json({ error: "Erro ao obter dados de ranking" });
        });
}

function buscarTiposCamping(req, res) {

    const limite_linhas = 7;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    campingModel.buscarTiposCamping(tipo_camping, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res) {
    console.log(`Recuperando medidas em tempo real`);

    campingModel.buscarMedidasEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


async function tipoMaisSelecionado(req, res) {
    try {
        const resultado = await campingModel.tipoMaisSelecionado();
        res.status(200).json(resultado);
    } catch (error) {
        console.error('Erro ao buscar tipo de camping mais selecionado:', error);
        res.status(500).json({ error: 'Erro ao buscar tipo de camping mais selecionado' });
    }
}



async function tipoMenosSelecionado(req, res) {
    try {
        const resultado = await campingModel.tipoMenosSelecionado();
        res.status(200).json(resultado);
    } catch (error) {
        console.error('Erro ao buscar tipo de camping menos selecionado:', error);
        res.status(500).json({ error: 'Erro ao buscar tipo de camping menos selecionado' });
    }
}


module.exports = {
    cadastrarTipoCamping,
    grafico,
    buscarMedidasEmTempoReal,
    buscarTiposCamping,
    tipoMaisSelecionado,
    tipoMenosSelecionado
}

