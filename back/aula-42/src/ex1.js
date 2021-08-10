//a)
//const minhaVariavel: string = ""
//Ocorre um erro de tipagem pois esta variável aceita apenas string
var TIPO_DE_COR;
(function (TIPO_DE_COR) {
    TIPO_DE_COR["AZUL"] = "azul";
    TIPO_DE_COR["BRANCO"] = "branco";
    TIPO_DE_COR["PRETO"] = "preto";
})(TIPO_DE_COR || (TIPO_DE_COR = {}));
var pessoa1 = {
    nome: "elias",
    idade: 27,
    corFavorita: TIPO_DE_COR.AZUL
};
var pessoa2 = {
    nome: "daniel",
    idade: 25,
    corFavorita: TIPO_DE_COR.BRANCO
};
var pessoa3 = {
    nome: "joao",
    idade: 23,
    corFavorita: TIPO_DE_COR.PRETO
};
