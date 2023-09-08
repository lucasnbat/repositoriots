"use strict";
var Cores;
(function (Cores) {
    Cores[Cores["VERMELHO"] = 0] = "VERMELHO";
    Cores[Cores["AZUL"] = 1] = "AZUL";
    Cores[Cores["AMARELO"] = 2] = "AMARELO";
})(Cores || (Cores = {}));
console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[1]);
function escolhaAcor(cor) {
    console.log('Teste= ' + Cores[cor]);
}
escolhaAcor(0);
var Carros;
(function (Carros) {
    Carros[Carros["MAVERICK"] = 10] = "MAVERICK";
    Carros[Carros["PROJTOA"] = 100] = "PROJTOA";
    Carros[Carros["NANANA"] = 200] = "NANANA";
    Carros["CAMARO"] = "lilili";
    Carros[Carros["ROSA"] = 201] = "ROSA";
    Carros[Carros["PRETO"] = 202] = "PRETO";
})(Carros || (Carros = {}));
console.log(Carros.MAVERICK);
console.log(Carros[0]);
console.log(Carros[100]);
console.log(Carros.CAMARO);
(function (Carros) {
    Carros["CONTINUACAO"] = "Carr\u00E3um";
})(Carros || (Carros = {}));
console.log(Carros);
