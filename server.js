var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');

//rotas
var teste = require('./routes/teste');
var investigacao = require('./routes/investigacao');

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

//Adiciona os arquivos da build do angular como static
var distDir = __dirname + "/dist/descubra-o-assassino/";
app.use(express.static(distDir));

// Criação da API

//Adiciona utilização das rotas
router.use('/teste',  teste);
router.use('/investigacao',  investigacao);

//Rota para as páginas do angular
 app.use('/pages/*',function(req, res) {
   res.sendFile(__dirname + '/dist/descubra-o-assassino/index.html');
 });

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