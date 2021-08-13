let item = process.argv[2,3]

tarefas = [
    "Lavar a louça",
    "comprar leite", 
]

novaLista = [...tarefas, item]

console.log(`Tarefa adicionada com sucesso!`)
console.log(`tarefas = [${novaLista.toString()}]`)