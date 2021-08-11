//Exercícios de interpretação de código
/*
1.Indique todas as mensagens impressas no console, SEM EXECUTAR o programa
a. Error
b. Null
c. 11
d. 3
e. 19
f. 9

2. Leia o código abaixo com atenção
SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/

//Exercícios de escrita de código
/*
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
Em seguida, imprima na tela a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. 
Seja bem-vinda(o), nomeDoUsuario!
*/
const userName = prompt (`What's your name? `)
const userEmail = prompt (`What's your email? `)
console.log (`The e-mail ${userEmail} was sucessfuly registered. Welcome, ${userName}`)

/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
armazenado em uma variável. Em seguida, siga os passos:*/
const comidasFavoritas = ["hamburguer", "biscoito", "banana", "pizza", "chocolate"]

//a) Imprima na tela o array completo
console.log[comidasFavoritas]

/*b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
seguida por cada uma das comidas, **uma embaixo da outra**.*/
console.log(`Essas são as minhas comidas preferidas:
${comidasFavoritas [0]}
${comidasFavoritas [1]}
${comidasFavoritas [2]}
${comidasFavoritas [3]}
${comidasFavoritas [4]}`)

/*c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
Troque a segunda comida da sua lista pela inserida pelo usuário. 
Imprima na tela a nova lista*/
var userAsk = prompt (`What's your favorite food? `)
comidasFavoritas [1] = userAsk
console.log(comidasFavoritas)

/*3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`*/
let array =[]
const taskList = array

/*b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, 
uma por uma, no array*/
const askOne = prompt(`Whats your first task today?`)
taskList.push(askOne)
const askTwo = prompt(`Whats your second task today?`)
taskList.push(askTwo)
const askThree = prompt(`Whats your third task today?`)
taskList.push(askThree)

//c) Imprima o array na tela
console.log(taskList)

/*d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 
0, 1 ou 2*/
const type = prompt(`Type a task that you have already done: 0, 1 or 2`) 

//e) Remova da lista o item de índice que o usuário escolheu.
taskList.splice(type,1)

//f) Imprima o array na tela
console.log(taskList)


