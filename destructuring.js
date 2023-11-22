const numeroPares = [2, 4, 6];
const numerosImpares = [3, 5, 7];

const numeros = [numeroPares, numerosImpares];

console.log(numeros);

numerosUnidos = [...numeroPares, ...numerosImpares];

console.log(numerosUnidos);

//outras funcionalidades de array

//const [num1, num2] = [1, 2];

//É a mesma coisa que declarar estas variáveis separadamente
//Se quiser ter mais de um valor para variáveis usamos os ...
//Ex

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

console.log(num1, num2, outrosNumeros);

//Para definir um valos padrão para um constante que pode ou não ser declarada.

const [nome1 = "Ju"] = ["Fernando"];
//Neste caso o valor padrão é Ju.

console.log(nome1);

//O destructuring pode ser usado também em objetos

const pessoa = {
    nome: "Turí Souza",
    idade: "36 anos",
}

const pessoaComTelefone = { 
    ...pessoa,
    telefone: 232323232,
}

console.log(pessoa, pessoaComTelefone);

//Formas de acessar as propriedades de um objeto

//Forma mais comum, se eu quiser acessar apenas o nome deste objeto

const nome = pessoa.nome;

console.log(nome);

//Outra forma de fazer a mesma coisa

const { idade } = pessoa;

console.log(idade);

// Formas de trabalhar com dados de um objeto em uma função

function imprimeDados (dados) {
    console.log(dados)
}

imprimeDados(pessoa);
//desta forma vamos imprimir o objeto

//outra forma

function imprimeDados2 (dados) {
    const {nome, idade} = dados;
    console.log(nome, idade);
}

imprimeDados2(pessoa);

//Outra forma

function imprimeDados3 ({ nome, idade}) {
        console.log(nome, idade);
}

imprimeDados3(pessoa);