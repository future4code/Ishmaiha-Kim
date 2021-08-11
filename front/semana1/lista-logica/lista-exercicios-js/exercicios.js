// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   const altura = prompt('Digite a altura')
   const largura = prompt('Digite a largura')

   console.log(altura * largura)
}

//Exercício 2

function imprimeIdade() {
   const currentYear = prompt(`what year is it in?`)
   const birthdayYear = prompt(`what year were you born?`)

   console.log(currentYear - birthdayYear)
}

//Exercício 3

function calculaIMC(peso, altura) {
   let IMC = peso / (altura * altura)
   return IMC
}

//Exercício 4

function imprimeInformacoesUsuario() {
   const name = prompt(`What is your name?`)
   const age = prompt(`How old are you?`)
   const email = prompt(`What is your email?`)

   console.log(`Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   const colorOne = prompt(`Whats your first favorite color?`)
   const colorTwo = prompt(`Whats your second favorite color?`)
   const colorThree = prompt(`Whats your third favorite color?`)
   console.log(Array(colorOne, colorTwo, colorThree))
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   const ticketSolds = (Number(custo) / Number(valorIngresso))
   return ticketSolds
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
   let word1 = string1.length
   let word2 = string2.length
   return word1 === word2
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   return array [0]
}

// Exercício 10

function retornaUltimoElemento(array) {
   const lastArray = array [array.length -1]
   return lastArray
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   let firstArray = array[0]
   array [0] = array [array.length -1]
   array [array.length -1] = firstArray
   return array
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   return string1.toUpperCase() === string2.toUpperCase()
}

// Exercício 13

function checaRenovacaoRG() {
   const currentYear13 = Number(prompt(`what year is it in?`))
   const birthdayYear13 = Number(prompt(`what year were you born?`))
   const rgYear = Number(prompt(`What year was your RG issued?`))
   
   let userAge = currentYear13 - birthdayYear13
   let identify = currentYear13 - rgYear
   let results = ((userAge < 20 && identify > 4) || (userAge > 20 && userAge < 50 && identify > 9) || (userAge > 50 && identify > 14))
   console.log(results)
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   // implemente sua lógica aqui
}