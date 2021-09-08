### EXERCÍCIO 01 ###
a. 
"rounds" é o nome que a bibioteca bcrypt dá ao "cost". 
É um parâmetro de um número na potência de 2 que especifica o número de rodadas de bcript aplicadas.
Portanto, um cost = 10 implica em 1024 rodadas de hashing enquanto que cost = 12 implica em 4096 rodadas.

Salt é uma string aleatória de comprimento fixo gerado a partir de uma senha.

Os valores recomendados são de 10 e 12 para aumentar o tempo de execução do algoritmo e atenuar ataques do tipo rainbow.

Utilizei o valor 12 por ser o padrão na maioria das bibliotecas.


### EXERCÍCIO 02 ###
a. 
Para realizar os testes corretamente é necessário cadastrar primeiramente o endpoint de cadastro. Porque
para efetuar o login é necessário que o hash do login seja comparado ao hash do banco de dados.

d.
Não será necessário alterar o endpoint editUser pois a validação acontece apenas com o token, name e nickname
não sendo necessário gerar um hash para o password.


### EXERCÍCIO 04 ###
Não há endpoint user/profile