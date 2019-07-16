const suspeitos = require("../data/suspeitos");
const locais = require("../data/locais");
const armas = require("../data/armas");
const util = require("../service/utilService");

var solucao = [1, 2, 3];

/**
 * Método para realizar a investigação
 */
function investigar() {

    //Realiza cópia do Map original para facilitar
    let possiveisSuspeitosMap = new Map(suspeitos.suspeitosCollection);//[1 , 2, 3, 4, 5, 6];
    let possiveisLocaisMap = new Map(locais.locaisCollection);//[1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let possiveisArmasMap = new Map(armas.armasCollection);//[1 , 2, 3, 4, 5, 6];

    let possiveisSuspeitosList = util.preencheValoresMapa(possiveisSuspeitosMap);//[1 , 2, 3, 4, 5, 6];
    let possiveisLocaisList = util.preencheValoresMapa(possiveisLocaisMap);//[1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let possiveisArmasList = util.preencheValoresMapa(possiveisArmasMap);//[1 , 2, 3, 4, 5, 6];

    //Lista dos palpites realizados
    let listaPalpites = [];

    //Cria o palpite inicial
    let palpite = criarPalpite(possiveisSuspeitosList, possiveisLocaisList, possiveisArmasList);

    console.log("---------------------------------");
    console.log("Iniciando invetigação");
    console.log("Solucao Susp=" + suspeitos.suspeitosCollection.get(solucao[0]) + " Local="
        + locais.locaisCollection.get(solucao[1])
        + " Arma=" + armas.armasCollection.get(solucao[2]));

    let culpadoEncontrado = false;
    listaPalpites.push(palpite);
    // return buscaCulpado(palpite);
    while (!culpadoEncontrado) {
        console.log("Palpite #" + listaPalpites.length +"  Susp=" + palpite[0] + " Local=" + palpite[1] + " Arma=" + palpite[2]);
        let validacao = buscaCulpado(palpite);

        if (validacao == 0) {
            culpadoEncontrado = true;
            console.log("---------------------------------");
            console.log("O total de tentativas foi " + listaPalpites.length);
            console.log("Culpado encontrado!");
            console.log("O assassino foi " + suspeitos.suspeitosCollection.get(palpite[0]));
            console.log("O local foi " + locais.locaisCollection.get(palpite[1]));
            console.log("A arma do crime foi " + armas.armasCollection.get(palpite[2]));
            return listaPalpites.length;
        } else {
            //Valida o retorno e atualiza a lista correspondente
            //assassiona está incorreto 
            if (validacao == 1) {
                possiveisSuspeitosMap.delete(palpite[0]);
                possiveisSuspeitosList = util.preencheValoresMapa(possiveisSuspeitosMap);
                palpite = atualizaPalpite(possiveisSuspeitosList, palpite, 0);
            }//local está incorreto;
            else if (validacao == 2) {
                possiveisLocaisMap.delete(palpite[1]);
                possiveisLocaisList = util.preencheValoresMapa(possiveisLocaisMap);
                palpite = atualizaPalpite(possiveisLocaisList, palpite, 1);
            }//arma está incorreta
            else if (validacao == 3) {
                possiveisArmasMap.delete(palpite[2]);
                possiveisArmasList = util.preencheValoresMapa(possiveisArmasMap);
                palpite = atualizaPalpite(possiveisArmasList, palpite, 2);
            }
            listaPalpites.push(palpite);
        }

    }

}

/**
 * Testa o chute inicial
 * retorna 0 se estiver correto
 * retorna 1 se o assassiona está incorreto
 * retorna 2 se o local está incorreto;
 * retorna 3 se a arma está incorreta
 * Caso mais de um estejam incorretos, retorna um dos valores aleatoriamente.
 */
function buscaCulpado(palpite) {
    let validacaoPalpite = [];
    //Testa o palpite do assassino
    if (palpite[0] != solucao[0]) {
        validacaoPalpite.push(1);
    }
    //Testa o palpite do local
    if (palpite[1] != solucao[1]) {
        validacaoPalpite.push(2);
    }
    //Testa o palpite da arma
    if (palpite[2] != solucao[2]) {
        validacaoPalpite.push(3);
    }

    if (validacaoPalpite.length == 0) {
        return 0;
    } else {
        //Busca um valor aleatório entre os objetos do array de possível retorno
        let indiceRetorno = util.obterNumeroAleatorio(0, validacaoPalpite.length - 1);
        //Retira 1 do valor final para igualar ao índice do array
        return validacaoPalpite[indiceRetorno];
    }
}

/**
 * Gera um palpite baseado nas listas de possibilidades
 */
function criarPalpite(possíveisSuspeitos, possíveisLocais, possíveisArmas) {
    let assassino = util.obterNumeroAleatorio(0, possíveisSuspeitos.length - 1);
    let local = util.obterNumeroAleatorio(0, possíveisLocais.length - 1);
    let arma = util.obterNumeroAleatorio(0, possíveisArmas.length - 1);

    //Inicia o chute inicial
    let palpite = [];
    palpite.push(possíveisSuspeitos[assassino]);
    palpite.push(possíveisLocais[local]);
    palpite.push(possíveisArmas[arma]);
    return palpite;
}

/**
 * Atualiza o palpite
 */
function atualizaPalpite(possibilidades, palpite, indice) {
    //Busca um novo índice aleatório
    let indiceValorRetorno = util.obterNumeroAleatorio(0, possibilidades.length - 1);
    palpite[indice] = possibilidades[indiceValorRetorno];
    return palpite;
}

module.exports.investigar = investigar;
