/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//---------------------PROJETO---------------------------------------
// alert(`Bem vindo ao jogo de Blackjack!`) 
// const carta = comprarCarta() 
// const carta1User = comprarCarta()
// const carta2User = comprarCarta()
// const carta1Pc = comprarCarta()
// const carta2Pc = comprarCarta()
//    if (confirm(`Deseja continuar? Clique "OK" ou "Cancel"`) === true){
//       console.log(`Usuário cartas:`,carta1User.texto, carta2User.texto,`- pontuação`, carta1User.valor, ` e `,carta2User.valor)
//       console.log(`Computador cartas:`,carta1Pc.texto, carta2Pc.texto,`- pontuação`, carta1Pc.valor, ` e `, carta2Pc.valor)
      
//    } else {
//       console.log(`Fim de jogo`)
//    }
// somaJogadores = (card1User, card2User, card1Pc, card2Pc) => {
//    const somaUser = Number(carta1User.valor) + Number(carta2User.valor)
//    console.log(`A soma das cartas do jogador deu ${somaUser}`)
//    const somaPc = Number(carta1Pc.valor) + Number(carta2Pc.valor)
//    console.log(`A soma das cartas do computador deu ${somaPc}`)
//    if (somaUser > somaPc) {
//       console.log(`Jogador ganhou!`)
//    } else if (somaUser < somaPc) {
//       console.log(`O computador ganhou!`)
//    } else {
//       console.log(`Empate!`)
//    }
   
// }
// somaJogadores(carta1User, carta2User, carta1Pc, carta2Pc)

//-----------------------DESAFIO----------------------------
alert(`Bem vindo ao jogo de Blackjack!`) 
const carta = comprarCarta() 
const carta1User = comprarCarta()
const carta2User = comprarCarta()
const carta1Pc = comprarCarta()
const carta2Pc = comprarCarta()
   if (confirm(`Deseja continuar? Clique "OK" ou "Cancel"`)){
      console.log(`Usuário cartas:`,carta1User.texto, carta2User.texto,`- pontuação`, carta1User.valor, ` e `,carta2User.valor)
      console.log(`Computador cartas:`,carta1Pc.texto, carta2Pc.texto,`- pontuação`, carta1Pc.valor, ` e `, carta2Pc.valor)
      
   } else {
      console.log(`Fim de jogo`)
   }
somaJogadores = (card1User, card2User, card1Pc, card2Pc) => {
const somaUser = Number(carta1User.valor) + Number(carta2User.valor)
console.log(`A soma das cartas do jogador deu ${somaUser}`)
const somaPc = Number(carta1Pc.valor) + Number(carta2Pc.valor)
console.log(`A soma das cartas do computador deu ${somaPc}`)
   if (carta1User === carta2User || carta1Pc === carta2Pc){
      console.log(`Usuário cartas:`,carta1User.texto, carta2User.texto,`- pontuação`, carta1User.valor, ` e `,carta2User.valor)
      console.log(`Computador cartas:`,carta1Pc.texto, carta2Pc.texto,`- pontuação`, carta1Pc.valor, ` e `, carta2Pc.valor)    
   } 
   if (somaUser && somaPc < 21) {
      if (somaUser > somaPc) {
         console.log(`Jogador ganhou!`)
      } else if (somaUser < somaPc) {
         console.log(`O computador ganhou!`)
      } else {
         console.log(`Empate!`)
      }
   }
   if (somaUser === 21 && somaPC < 21){
      console.log(`Usuário ganhou`)
   } else if (somaPc === 21 && somaUser <21){
      console.log(`Computador ganhou`)
    } else if (somaPc === 21 && somaUser === 21){
         console.log(`Empate`)
    }
   if (somaUser > 21 || somaPc > 21){
      if (somaUser > 21 && somaPC < 21){ 
         console.log(`Computador ganhou`)
      } else if (somaUser < 21 && somaPc > 21){
         console.log(`Jogador ganhou`)
      } else {
         console.log(`Empate`)
      }
   }
}
somaJogadores(carta1User, carta2User, carta1Pc, carta2Pc)





