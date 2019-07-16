const suspeitos = require("../data/suspeitos");
const locais = require("../data/locais");
const armas = require("../data/armas");
const util = require("../service/utilService");

var solucao = [1 ,2 ,3 ];

/**
 * Método para realizar a investigação
 */
function investigar(){
    let possíveisSuspeitos = util.preencheValoresMapa(suspeitos.suspeitosCollection);//[1 , 2, 3, 4, 5, 6];
    let possíveisLocais = util.preencheValoresMapa(locais.locaisCollection);//[1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let possíveisArmas = util.preencheValoresMapa(armas.armasCollection);//[1 , 2, 3, 4, 5, 6];

    //Cria o chute inicial
    let assassino = util.obterNumeroAleatorio(1, suspeitos.suspeitosCollection.size);
    let local = util.obterNumeroAleatorio(1, locais.locaisCollection.size);
    let arma = util.obterNumeroAleatorio(1, armas.armasCollection.size);

    //Inicia o chute inicial
    let chute = [];
    chute.push(assassino);
    chute.push(local);
    chute.push(arma);

    console.log("Susp="+chute[0] + " Local="+chute[1] + " Arma="+chute[2]);

    //TODO

    return chute[0] + chute[1] + chute[2];
}

function buscaCulpado(){

}

module.exports.investigar = investigar;
