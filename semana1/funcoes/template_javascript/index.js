// ------- EX 01 (TEÓRICO) ----------------------------------//
/*
a) 10 e 50
b) Se retirasse os dois 'consoles.log' nenhum valor seria impresso. Portanto,
apareceria 'undefined' no console.
*/

// ------- EX 02 (TEÓRICO) ----------------------------------//
/*
a) Essa função transforma todos os caracteres em letras minúsculas e verfica
se nela contém a palavra "cenoura"
b) 
i. eu gosto de cenoura TRUE
ii. cenoura é bom pra vista TRUE
iii. cenouras crescem na terra FALSE
*/

// ------- EX 01 (ESCRITA DE CÓDIGO) ----------------------------------//
//a)
/*function personalInfo (){
    console.log(`I'm Ishmaiha, have 30 anos, live in São Paulo e my occupation is studant.`)
}
personalInfo ()*/

//b)
/*function personalInfo (name, age, city, occupation) {
    console.log(`I'm ${nome}, have ${idade} anos, live in ${cidade} and my occupation is ${profissão}`)  
}
personalInfo('Ishmaiha', 30, 'SP', 'nutricionist')
*/

// ------- EX 02 (ESCRITA DE CÓDIGO) ----------------------------------//
//a)
function numberA (number1A, number2A) {
    const sum = number1A + number2A
    return sum
}
const realsum = numberA (1,2)
console.log(numberA (1,2))

//b)
function numberB (number1B, number2B) {
    const compare = number1B >= number2B
    return compare
}
const comparison = numberB (6,3)
console.log(numberB(6,3))

//c)
function parImpair (number) {
    const bool = number % 2 === 0
    return bool
}
const result = parImpair (6)
console.log(parImpair(6))

//d)


// ------- EX 03 (ESCRITA DE CÓDIGO) ----------------------------------//
/*
Crie uma função para cada uma das operações básicas 
(soma, subtração, multiplicação e divisão). Em seguida, 
peça para o usuário inserir dois números e 
chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
Por fim, mostre no console o resultado das operações:
*/


