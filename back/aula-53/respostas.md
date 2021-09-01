### HERANÇA ###

### EXERCÍCIO 01 
a. 
Não. Seria possível caso houvesse um getter no atributo "password" de visibilidade pública
b. 
A mensagem "Chamando o construtor da classe User" foi impressa apenas 1x no terminal

### EXERCÍCIO 02
a.
A mensagem "Chamando o construtor da classe Customer" impressa apenas 1x no terminal
b.
A mensagem "Chamando o construtor da classe User" impressa apenas 2x no terminal

### EXERCÍCIO 03
a. 
Sim. Seria possível imprimir a senha "password" atrelada a essa instância desde que 
inserisse o método getter do "password"

### EXERCÍCIO 04
public introduceYourself(): string{
    return ("Olá, bom dia!")
}
console.log(newCustomer.introduceYourself())

### EXERCÍCIO 05
public introduceYourself(): string{
    return (`Olá, sou ${this.name}! Bom dia!`)
}
console.log(newCustomer.introduceYourself())

### POLIMORFISMO ###

### EXERCÍCIO 01
export const client: Client = {
    name: "goli",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 123;
    }
}

### EXERCÍCIO 02
a.
O Typescript diz que não é possível criar uma instância de uma classe abstrata
b.
Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

### EXERCÍCIO 03
1.
Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

2.
Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

3.
Criamos classes abstratas quando não há uma situação em que seja necessário criar uma instância dessa classe.

### EXERCÍCIO 04
- Entidade herdados da classe Place: cep
- Entidade herdados da classe Residence: residentsQuantity
- Atributos herdados da interface Client: name, registrationNumber, consumedEnergy
- Método getter da própria classe em questão: 
public getCpf():string{
    return this.cpf
}
- Método herdado da interface Client:
public calculateBill():number{ 
    return this.consumedEnergy * 0.75
}

A entidade oriunda da classe Place foi herdada através da classe Residence
por esta ser filha direta da primeira. A entidade oriunda da classe Residence
foi herdada diretamente dela por ser uma filha direta. Por sua vez, os atributos e o
método da interface Client foi implementado por meio da palavra-chave "implement"

### EXERCÍCIO 05
a. 
As semelhanças dessa classe com a ResidencialClient é que ambas são filhas de classes que, por sua vez, são filhas da classe raiz "Place". Outra coisa é que ambas sofreram implementação da interface Client.

b. 
A diferença está nos atributos privados de cada classe e também do atributo herdado diretamente da classe mãe (residentsQuantity e floorsQuantity)

### EXERCÍCIO 06
a.
Ela deve ser filha da classe Industry pois os atributos estão diretamente relacionados à ela

b.
Implementa a interface Client porque calcula o valor do serviço que será destinado ao cliente

c.
Somente os getter foram solicitados pois o número de registro industrial era privado por ser confidencial. Isto é, não poderia ser alterado. E o cálculo do valor a ser cobrado também não alteraria.



