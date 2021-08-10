//a)
//const minhaVariavel: string = ""
//Ocorre um erro de tipagem pois esta variável aceita apenas string

//b)
//const meuNumero : number | string = "3"
//Para inserir uma pipe para que aceita um valor numérico ou uma string 

//c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum TIPO_DE_COR {
    AZUL = "azul",
    BRANCO = "branco",
    PRETO = "preto"
}

const pessoa1: Pessoa = {
     nome: "elias",
     idade: 27,
     corFavorita: TIPO_DE_COR.AZUL
}

const pessoa2: Pessoa = {
     nome: "daniel",
     idade: 25,
     corFavorita: TIPO_DE_COR.BRANCO
}

const pessoa3: Pessoa = {
     nome: "joao",
     idade: 23,
     corFavorita: TIPO_DE_COR.PRETO
}



