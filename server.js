var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');

//rotas
var teste = require('./routes/teste');

//Aqui o 'app' irá pegar as instâncias das Rotas do Express
var app = express();
app.use(cors({
  exposedHeaders: ['new-authorization'],
}));

app.use(bodyParser.json());

// Inicia a aplicação na porta indicada
var server = app.listen(process.env.DOA_PORT || 8080, function () {
  var port = server.address().port;
  console.log("Aplicacao Descubra o Assassino rodando na porta ", port);
});

var router = express.Router();

// Criação da API

//Adiciona utilização das rotas
router.use('/teste',  teste);

/* Prefixo para as rotas */
app.use('/v1/descubra-o-assassino', router);

// Tratamento de erro
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Erro interno' })
  } else {
    next(err)
  }
}

app.use(clientErrorHandler);