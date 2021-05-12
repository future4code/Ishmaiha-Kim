/*----------Exercícios de interpretação de código------------
1.
O código está atribuindo valor à variável "valor" e somando os valores enquanto "i" for menor que 5.
o console imprimirá "10".

2.
a) Será impresso cada cada número da array < 18.
Nesse caso, os números: 19, 21, 23, 25, 27, 30.

b) Não. No JS6 até seria possivel usando o método entries() mas não é algo nativo da sintaxe do javascript.

3.
imprimiria 4 linhas somando "0"s em cada um.
*/

//----------Exercícios de escrita de código------------
/*1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
c) Por fim, imprima o array com os nomes dos bichinhos no console


let bichinhos = Number(prompt(`Quantos bichinhos de estimação você tem? `))
if (bichinhos === 0){
    console.log(`Que pena! Você pode adotar um pet!`)
} else{
    console.log(`Diga o nome dos seus bichinhos por gentileza`)
let nomesBichos = []
for (i= 0; i < bichinhos; i++)
nomesBichos.push (prompt(`Os nomes são: `))
console.log(nomesBichos)
}
2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. 
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
a) Escreva um programa que imprime cada um dos valores do array original.
b) Escreva um programa que imprime cada um dos valores do array original divididos por 10.
c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array.
d) Escreva um programa que crie um novo array contendo strings, 
a seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.
*/
let arrayOriginal =[1,2,3,4,5]
function exA(){
    for (numeros of arrayOriginal){
        console.log(numeros)
    }
        console.log(numeros/10)
}
exA ()
function exC(arrayOriginal){
    let arrayPar = []
    for (i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal % 2 === 0){
            arrayOriginal.push(arrayPar[i])
        }
    }
    console.log(arrayPar)
}
