/*Exercícios de interpretação de código
1.
a) False 
b) False
c) False
d) Undefined

2. O console imprimirá "primeiroNumero" + "segundoNumero" porque o prompt sempre retorna uma STRING

3. Para corrigir o erro basta colocar o comando "Number" antes de "Prompt"

*/

//Exercícios de escrita de código

//1. Faça um programa que:
//a) Pergunte a idade do usuário
let idadeUsuario = Number(prompt("Quantos anos você tem? "))

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let idadeMelhoresAmigos = Number(prompt("Quantos anos tem o seu melhor amigo ou amiga? "))

//c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
const resultado = idadeUsuario > idadeMelhoresAmigos
console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)

//d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)
const diferença = idadeUsuario - idadeMelhoresAmigos
console.log("Vocês tem ", diferença, "anos de diferença")


//2. Faça um programa que:
//a) Peça ao usuário que insira um número par
let numeroUsuario = Number(prompt("Insira um numero par: "))

//b) Imprima na console o resto da divisão desse número por 2.
console.log("O resto da divisão do número por 2 é ", numeroUsuario % 2)

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// O resto da divisão sempre === 0.

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código.
// O resto da divisão será um número diferente !== 0. 

//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console.
let anosUsuario = Number(prompt("Quantos anos você tem? "))
//a) A idade do usuario em meses
console.log("O usuário tem", anosUsuario * 12, "meses de idade")

//b) A idade do usuário em dias
console.log("O usuário tem", anosUsuario * 365, "dias de idade")

//c) A idade do usuário em horas
console.log("O usuário tem", anosUsuario * 365 * 24, "horas de idade")

//4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:
let number1 = Number(prompt("Insira o primero número: "))
let number2 = Number(prompt("Insira o segundo número: "))

//a) O primeiro número é maior que segundo? true
console.log("O primeiro numero é maior que segundo?", number1 > number2)

//b) O primeiro número é igual ao segundo? false
console.log("O primeiro numero é igual que segundo?", number1 !== number2)

//c) O primeiro número é divisível pelo segundo? true
console.log("O primeiro numero é divisível pelo segundo número?", (number1 % number2) === 0)

//d) O segundo numero é divisível pelo primeiro? true
console.log("O segundo numero é divisível pelo primeiro número?", (number2 % number1) === 0)