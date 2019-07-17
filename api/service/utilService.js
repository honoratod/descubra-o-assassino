/**
 * Retorna um número inteiro aleatório entre dois valores, inclusive
 */
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function preencheValoresMapa(mapa){

    let listaValores = [];

    for (var entrada of mapa.entries()) {
        var key = entrada[0];
        listaValores.push(key);
    }

    return listaValores;

}

module.exports.obterNumeroAleatorio = obterNumeroAleatorio;
module.exports.preencheValoresMapa = preencheValoresMapa;