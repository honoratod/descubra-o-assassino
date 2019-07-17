# descubra-o-assassino

Api de consulta de resolução de para o problema de investigação proposto. Desenvolvida em Node.js (v10) / express e Angular (v7)<br><br>
Para iniciar a aplicação, executar comandos:<br>
<b>npm install</b> (para instalar as dependências), este processo pode levar alguns minutos, pois após instalar as dependências do node e Angular, realiza o build da aplicação Angular.<br>
<b>npm start</b> (para iniciar)

Arquivo principal da aplicação: <b>server.js</b>

Para acessar via requisição GET
http://localhost:8080/v1/descubra-o-assassino/investigacao/realizar-investigacao

Para acessar via página ANGULAR http://localhost:8080/pages/

<b>Descrição</b><br>
A aplicação gera um crime aleatório, dentre os valores de atributo possíveis, composto por Suspeito, Local e Arma. Em seguida, tenta encontrar a solução baseado nas regras propostas, retornando os dados da investigação no formato <i>json</i>.<br>
<b>Possíveis valores</b><br>
Suspeitos: 
• Charles B. Abbage 
• Donald Duck Knuth 
• Ada L. Ovelace 
• Alan T. Uring 
• Ivar J. Acobson 
• Ras Mus Ler Dorf
 
Locais: 
• Redmond
• Palo Alto 
• San Francisco 
• Tokio 
• Restaurante no Fim do Universo 
• São Paulo 
• Cupertino 
• Helsinki 
• Maida Vale 
• Toronto
 
Armas: 
• Peixeira 
• DynaTAC 8000X (o primeiro aparelho celular do mundo) 
• Trezoitão 
• Trebuchet 
• Maça 
• Gládio

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
