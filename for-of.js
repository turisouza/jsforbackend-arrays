// Usando o For Of para fazer iteracões

const notas = [10, 6.5, 8, 7.5];

//utilizando o For Of

somaDasNotas = 0;

for (let elemento of notas) {

    somaDasNotas += elemento;

}

const media = somaDasNotas / notas.length;