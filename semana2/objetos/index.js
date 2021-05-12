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
/* 
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
    const arr =[]
    const names = varAB.name
    const tamanho = varAB.name.length
    const ages = varAB.age
    const occupations = varAB.occupation
    const sizeOccupations = occupations.length
    arr.push(names, tamanho, ages, occupations, sizeOccupations)
    return console.log (arr)
}
newEx(alpha) //chamando a função
newEx(beta)
*/
/* 
3.
*/
//a)
const carrinho = []

//b)
const fruitOne = {
    name: 'apple',
    haveFruit: true
}
const fruitTwo = {
    name: 'peach',
    haveFruit: true
}
const fruitThree = {
    name: 'grape',
    haveFruit: true
}
function received(fruta) {
    return carrinho.push(fruta)
}
received(fruitOne)   
received(fruitTwo)
received(fruitThree)

//d)
console.log(carrinho)


