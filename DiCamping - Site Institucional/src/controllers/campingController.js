var campingModel = require("../models/campingModel");

function cadastrarTipoCamping(req, res) {
    var tipoCamping = req.body.tipoCampingServer;

    if (tipoCamping == undefined) {
        res.status(400).send("O tipo de camping está indefinido!");
    }

    campingModel.cadastrarTipoCamping(tipoCamping).then(function(resposta){
        res.status(200).send("Tipo de camping cadastrado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrarTipoCamping
}
