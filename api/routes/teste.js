//Classe apenas para testes de requisição
var express = require('express');
var router = express.Router();
const suspeitos = require("../data/suspeitos");
const investigacao = require("../service/investigacaoService");

//Hello world
router.get("/", function (req, res) {
    res.status(200).json({ message: 'Pronto para a investigação!' });
});

router.get("/suspeitos", function (req, res) {

    let teste = { 'a' : 'b'};

    res.status(200).json(teste);
});


module.exports = router;
