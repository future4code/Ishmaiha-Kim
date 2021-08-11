/* 

Ex. 1
console.log (b) = 10
b = 5
console.log (a,b) = 10, 5

Ex. 2
console.log (a, b,c) = 10, 10, 10

Ex. 3
let p = horasDia
let t = salarioDia

*/
//1. Construa um programa, seguindo os seguintes passos://
//a) Declare uma variável para armazenar um nome, sem atribuir um valor.//
let name

//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.//
let age

//c) Imprima na tela o tipo dessas variáveis que acabou de criar//
console.log("Qual é o seu nome?", typeof name) 
 
console.log("Qual é a sua idade?", typeof age)

//d) Foi impresso Undefined pois as variáveis não receberam nenhum valor //

/* e) Pergunte ao usuário seu nome e sua idade, 
atribuindo esses dois valores às variáveis que acabou de criar.
*/
name = prompt ("Qual é o seu nome?")
age = prompt ("qual é a sua idade?")

/*f) Novamente, imprima na tela o tipo dessas variáveis. 
O que você notou? Escreva em um comentário de código. 
*/
console.log(typeof name)
console.log(typeof age)
// as variáveis "name" e "age" retornam como string.

/*g) Para finalizar, imprima na tela a mensagem: "Olá nome, você tem idade anos". 
Onde nome e idade são os valores que o usuário inseriu*/

console.log("Olá", name, "você tem", age, "anos")

/*2. Escreva um programa que faça 3 perguntas de Sim ou Não, 
armazenado em uma variável. 
Por exemplo: "Você está usando uma roupa azul hoje?". 
Depois, siga os passos:*/

//a) Crie três novas variáveis, contendo as respostas//
// variáveis contendo as perguntas
const primeira = "Você tem 2 metros de altura?"
const segunda= "Você bebe café melitta?"
const terceira = "Você tem 10 dedos na mão?"

// variáveis contendo as respostas
const altura = prompt (primeira)
const café = prompt (segunda)
const dedos = prompt (terceira)

//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas.//

console.log(primeira, altura)
console.log(segunda, café)
console.log(terceira, dedos)

/*3.Dadas duas variáveis a e b com valores diferentes, 
troque o conteúdo delas sem atribuir diretamente os valores!
*/

let a = 10
let b = 5
let c
c = a
a = b
b = c
console.log (a, b, c)


