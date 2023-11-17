//Removendo elementos repetidos (duplicatas) com a classe Set
//Um professor acidentalmente adicionou nomes repetidos na lista de chamada:
//Remova os nomes repetidos, deixando apenas um de cada.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesCorrigidos = new Set(nomes);
//O Set é uma classe do JS
//Ele cria um novo conjunto sem elementos repetidos

//Se quisermos voltar a teruma lista, em vez de um conjunto temos que usar o spread operator
const nomesAtualizados = [...nomesCorrigidos];

//poderia também ter feito diretamente o new Set na nova variável
const nomesSemDuplicatas = [...new Set(nomes)];
