var express = require("express");
var router = express.Router();

var campingController = require("../controllers/campingController");

router.post("/cadastrarCamping", function (req, res) {
    campingController.cadastrarTipoCamping(req, res);
});

module.exports = router;