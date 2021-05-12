//--------------EXERCICIO TEÓRICO------------------
/*
1.
a) O teste pergunta ao usuário sobre o teste de um número.
O usuario passa no teste se o numero for divisivel por 2. Caso contrário,
o usuario é reprovado.
b) Todos os números divisiveis por 2, isto é, números pares.
c) Para todos os demais numeros não divisíveis por 2, isto é, números ímpares
*/

/*
2.
a) O código serve para comparar os preçøs das frutas
b) O preço da fruta Maçã é R# 2.25
c) O preço da fruta Pêra Laranja é R$ 5.5 R$ 3.5
*/

/*
3.
a) A constante "numero" está armazenando um valor número a 
partir da resposta do usuário
b) Se o usuário digitar o número 10 a mensagem no terminal será:
Esse número passou no teste. Essa mensagem é secreta
Se o usuário digitar o número -10 a mensagem no terminal será:
Error
c) Sim. Se o número for menor que 0 não há nenhum condição que a condicione.
Desse modo, nenhum mensagem poderá ser imprimida.
*/

//--------------EXERCICIO PRÁTICO------------------

//1.
//a) b)
const userAge = Number(prompt(`How old are you? `))

//c)
if (userAge >= 18) {
    console.log('You can drive')
} else {
   console.log(`You can't drive`)

//}

//2.

let periodStudy = prompt(`When you study [M], [E] or [N] `).toUpperCase()
if (periodStudy === 'M'){
    console.log('Good morning!')
} else if (periodStudy === 'E'){
        console.log('Good evenning!')
    } else {
        console.log('Good night!')
    }

//3.

let period = prompt(`When you study [M], [E] or [N] `).toUpperCase()
switch (period) {
    case 'M':
        console.log('Good morning!')
        break;
    case 'E':
        console.log('Good evening')
    default:
        console.log('Good night!')
        break;
}


//4.

let genderMovie = prompt(`What genre of film are you going to watch?`).toLowerCase()
let priceMovie = Number(prompt(`How much is the ticket?`))
if (genderMovie === 'fantasy' && priceMovie < 15){
    console.log(`Nice movie!`)
} else {
    console.log(`Choose another movie =(`)
} 


// ---------------- DESAFIO ----------------------
//1)

let genderMovie = prompt(`What genre of film are you going to watch?`).toLowerCase()
let priceMovie = Number(prompt(`How much is the ticket?`))
let lunchMovie = prompt('Which snack will you buy? ')
if (genderMovie === 'fantasy' && priceMovie < 15){
    console.log(`Nice movie!`)
} else {
    console.log(`Choose another movie =(`)
}
console.log(`Enjoy your ${lunchMovie}`)


//2)
let valorTotal =()=>{
    
    let value  
    let userName = prompt(`Full name please`)
    let gameType = prompt(`Game type [IN] or [N]`).toUpperCase()
    let gameStage = prompt(`Game stage [SF] [TP] [F]`).toUpperCase()
    let category = Number(prompt(`Select options [1], [2], [3] or [4]`))
    let amount = Number(prompt(`How many tickets you want?`))

    switch (gameStage) {
        case SF:
            switch (category) {
                case 1:
                    value = 1320
                    break;
                case 2:
                    console.log(880)
                    break;
                case 3:
                    console.log(550)
                    break;
                default:
                    console.log(220)
                    break;
            }
            break;
        case TP:
            switch (category) {
                case 1:
                    console.log(660)
                    break;
                case 2:
                    console.log(440)
                case 3:
                    console.log(330)  
                default:
                    console.log(170)
                    break;
            }
            break;
        case F:
            switch (category) {
                case 1:
                    console.log(1980)
                    break;
                case 2:
                    console.log(1320)
                case 3:
                    console.log(880)
                default:
                    console.log(330)
                    break;
        }break;

value = value * amount
if (gameType === 'IN'){
    console.log
}

}
console.log(valorTotal())