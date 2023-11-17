//Clonando / copiando uma lista / array sem alterar a lista original com o spread operator

//Crie um novo array com a nota 10 a mais, sem alterar o array original.

const notas = [7, 7, 8, 9];

const novasNotas = [...notas];
//os 3 pontos indicam que os elementos de notas estão sendo clonados para NovasNotas
//os 3 pontos são um operador chamado spread opearator
//também chamado de operador de espalhamento/sintaxe de espalhamento

//Este operado também suporta adições de valores
const novasNotas2 = [5, ...notas, 10, 20, 30];

//As atribuições de array são atribuições por referência e por isso ocupam o mesmo espaço na memória
//As atribuições de valores primitivos (strings, numeros e booleanos) criam um novo espaço para cada um deles


console.log(novasNotas2);