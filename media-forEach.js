// Usando o forEach para calcular média
// usando o forEach para iterar uma lista

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//no forEach podemos acessar o valor da lista e também o índice
notas.forEach(function (nota, indice) {

    somaDasNotas += nota;
    // Neste caso as notas serão exibidas como parâmetro da função anônima.

    console.log(indice);
    // aqui os índices das lista notas serão impressos

});
//quando passamos uma função dentro de outro chamamos ela de call back
// o forEach realiza um ação para cada elemento, neste caso chmaou a função anônima

const media = somaDasNotas / notas.length;
