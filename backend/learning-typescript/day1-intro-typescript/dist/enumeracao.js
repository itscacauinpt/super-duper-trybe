"use strict";
// Exercícios
// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
var weekDays;
(function (weekDays) {
    weekDays[weekDays["domingo"] = 1] = "domingo";
    weekDays[weekDays["segunda"] = 2] = "segunda";
    weekDays[weekDays["ter\u00E7a"] = 3] = "ter\u00E7a";
    weekDays[weekDays["quarta"] = 4] = "quarta";
    weekDays[weekDays["quinta"] = 5] = "quinta";
    weekDays[weekDays["sexta"] = 6] = "sexta";
    weekDays[weekDays["sabado"] = 7] = "sabado";
})(weekDays || (weekDays = {}));
// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
var rainbow;
(function (rainbow) {
    rainbow["violeta"] = "violeta";
    rainbow["anil"] = "anil";
    rainbow["azul"] = "azul";
    rainbow["verde"] = "verde";
    rainbow["vermelho"] = "vermelho";
    rainbow["laranja"] = "laranja";
    rainbow["amarelo"] = "amarelo";
})(rainbow || (rainbow = {}));
// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
var aStatus;
(function (aStatus) {
    aStatus[aStatus["salvar"] = 0] = "salvar";
    aStatus[aStatus["visualizar"] = 1] = "visualizar";
    aStatus[aStatus["abrir"] = 2] = "abrir";
    aStatus[aStatus["fechar"] = 3] = "fechar";
    aStatus[aStatus["imprimir"] = 4] = "imprimir";
})(aStatus || (aStatus = {}));
// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
var cardeais;
(function (cardeais) {
    cardeais["NORTE"] = "N";
    cardeais["SUL"] = "S";
    cardeais["LESTE"] = "L";
    cardeais["OESTE"] = "O";
})(cardeais || (cardeais = {}));
