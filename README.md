# descubra-o-assassino

Api de consulta de resolução de para o problema de investigação proposto. Desenvolvida em Node.js (v10) / express<br>
Para iniciar a aplicação, executar comandos:
npm install (para instalar as dependências), este processo pode levar alguns minutos, pois após instalar as dependências do node e Angular, realiza o build da aplicação Angular.
npm start (para iniciar)

Para acessar via GET
http://localhost:8080/v1/descubra-o-assassino/investigacao/realizar-investigacao

Para acessar via ANGULAR http://localhost:8080/pages/

<b>API Endpoints</b>

<ul>
  <li>Resolução de Crime<br>
    <p><i>Esta opção gera um crime randômico e realiza a investigação do mesmo, retornado a quantidade de tentativas, as tentativas realizadas e informações sobre o crime.</i></p>
    <p><code>Method GET</code> .v1/descubra-o-assassino/investigacao/realizar-investigacao<br>
    <p>Exemplo de retorno</p>
    <code>{
    "qtd-tentativas": 3,
    "crime": {
        "suspeito": "Donald Duck Knuth",
        "local": "San Francisco",
        "arma": "Gládio"
    },
    "palpites": [
        {
            "posicao": 1,
            "suspeito": "Alan T. Uring",
            "local": "San Francisco",
            "arma": "Gládio"
        },
        {
            "posicao": 2,
            "suspeito": "Ras Mus Ler Dorf",
            "local": "San Francisco",
            "arma": "Gládio"
        },
        {
            "posicao": 3,
            "suspeito": "Donald Duck Knuth",
            "local": "San Francisco",
            "arma": "Gládio"
        }
    ]
}</code>
  </li>
  <hr>
</ul>
