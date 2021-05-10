// --------- EXERCICIOS TEÓRICOS ---------------------
/*
1. 
a) 
Matheus Nachtergaele
Virginia Cavendish
"Canal Brasil", 19h

2. 
/*
a) 
Juca, 3, SRD
Juba, 3, SRD
Jubo, 3, SRD

b)
Copia os elementos do objeto referenciado

3.
a)
false
undefined
b)
O valor "false" foi impresso porque o programa pedia para imprimir a terceira variável
do objeto "pessoa".
O valor "undefined" foi impresso porque não há nenhuma variável de nome "altura"
*/

// --------- EXERCICIOS ESCRITOS ---------------------
/* 
1.
*/
//a)
/*
const person = {
    name: 'Ishmaiha',
    nickname: ['Ish', 'Kim', 'Korea']
}
function add (object) {
    console.log (`I'm ${object.name} but you can call me ${object.nickname[0]}, ${object.nickname[1]} or ${object.nickname[2]}`) 
}
add(person)


//b)
const newP = {
    ...person,
    nickname: ['A', 'B', 'C']
} 
add(newP)


/* 
2.
*/
//a) 
const alpha = {
    name: 'Ishmaiha',
    age: 30,
    occupation: 'Nutricionist'
}

const beta = {
    name: 'Elias',
    age: 26,
    occupation: 'Advertisor'
}
//b)
function newEx (varAB) {
    names = varAB.name
    return console.log (names)

}
newEx(alpha)
newEx(beta)
