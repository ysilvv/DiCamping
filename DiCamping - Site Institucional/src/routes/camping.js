var express = require("express");
var router = express.Router();

var campingController = require("../controllers/campingController");

router.post("/cadastrarCamping", function (req, res) {
    campingController.cadastrarTipoCamping(req, res);
});

router.get("/grafico", function (req, res) {
    campingController.grafico(req, res);
});


router.get("/buscarTiposCamping", function (req, res) {
    campingController.buscarTiposCamping(req, res);
});

router.get("/tempo-real", function (req, res) {
    campingController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;