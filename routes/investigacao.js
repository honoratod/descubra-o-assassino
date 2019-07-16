var express = require('express');
var router = express.Router();
const investigacao = require("../service/investigacaoService");

router.get("/realizar-investigacao", function (req, res) {
    // let resultado = { 'a' : investigacao.investigar()};
    try {
        let resultado = investigacao.investigar();
        res.status(200).json(resultado);
    }catch{
        res.status(500).json({"mensagem" : "erro ao realizar a investigação"});
    }
});

module.exports = router;
