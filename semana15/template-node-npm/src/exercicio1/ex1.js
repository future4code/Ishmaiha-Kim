/* 1) 
a) Para passar parâmetros na linha de comando do Node devemos usar 
o comando "node" + "nome do arquivo" + "parâmetro em questão" 
*/

//b)
let nome = process.argv[2]
const age = Number(process.argv[3])

// console.log(`Olá, ${nome}! Você tem ${age} anos.`)

//c)
console.log(`Olá, ${nome}! Você tem ${age} anos.
Em sete anos você terá ${age+7} anos.`)


