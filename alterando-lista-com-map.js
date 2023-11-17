// alterando os elementos de uma lista com map
// adicionando um valor a cada elemento com map


const notas = [10, 9.5, 8, 7, 6];

//laço de repetição para reescrever arrays
//não altera o array original
const notasAtualizadas = notas.map((nota) => {

    return nota + 1;
    //Caso eu não queira notas maiores que 10 vou usar o operador ternário
    //return nota + 1 >= 10 ? 10 : nota + 1;

});

console.log(notasAtualizadas);