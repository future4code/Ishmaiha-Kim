// ------------INTERPRETAÇÃO DE CÓDIGO----------------------
//1. 
//a) um novo array idêntico ao array original

//2.
/*a) Irá retornar apenas os "nomes", ignorando os "apelidos"
["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
*/

//3.
/*a)
Irá retornar apenas os itens cujo "apelido" seja diferente de "Chijo"
{ nome: 'Amanda Rangel', apelido: 'Mandi' },
{ nome: 'Laís Petra', apelido: 'Laura' }
*/

// ------------EXERCÍCIOS ESCRITOS----------------------
//1. 
/*
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
//a)

const nomePets = pets.map((elemento,indice,array) => {
   return elemento.nome
})
console.log(nomePets)

//b)
const petSalsicha = pets.filter((elemento,indice,array) => {
   return elemento.raca === "Salsicha"
})
console.log(petSalsicha)

//c)

const petPoodle = pets.filter((elemento,indice,array) => {
   return elemento.raca === "Poodle"
})
console.log(petPoodle)

const mensagemPoodle = petPoodle.map((elemento, indice, array) => {
   console.log(`"Você ganhou um cupom de desconto de 10% para tosar o/a ${elemento.nome}!"`)
})

2.
*/
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a)
/*
const novosProdutos = produtos.map((elemento,indice,array) => {
   return elemento.nome 
})
console.log(novosProdutos)*/

//b)Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles.

const novoArray = produtos.map((elemento, indice, array) => {
   for (elemento.nome of elemento){
      console.log(novoArray)
   }
})
console.log(novoArray)

 
/*const arrayNome = produtos.map((elemento, indice,array) =>{
   return elemento.nome
})

const arrayPreco = produtos.map((elemento, indice, array)=> {
   return elemento.preco
})
*/
/*
const novoPreco = produtos.map((elemento, indice, array) =>{
   return elemento.preco * 0.95
})
console.log(novoPreco)
*/