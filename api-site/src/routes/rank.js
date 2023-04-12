var express = require("express");
var router = express.Router();

var rankController = require("../controllers/rankController");

router.post("/dadosgraph", function (req, res) {
    rankController.rank(req, res);
});

module.exports = router;