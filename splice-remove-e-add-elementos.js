// Adicionando e removendo elementos com splice

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2,);

//remove elementos da lista
// o primeiro parâmetro indica onde vai iniciar a remoção
// o segundo parâmtro indica quantos elementos serão removidos após o primeiro

nomes.splice(1, 2, "Rodrigo");
//Usando este terceiro parâmetro ele adiciona o elemento no lugar do que foi removido

// Altera o Array original