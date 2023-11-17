// somando elementos do array com o reduce


const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

//Aqui vamos usa o reduce para iterar no array
//Ele vai receber um arrow functio como parâmetro

function calculaMedia (notasDaSala) {

    //aqui será usado como parâmetro o acumulador para receber a soma das notas
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {

        return acumulador + nota;

    //ou
    //const somaDasNotas = notasDaSala.reduce((acumulador, nota) => acumulador + nota, 0);

    }, 0);
    //Este zero é o valor inicial do acumulador

    const media = somaDasNotas / notasDaSala.length;

    return media;

}

console.log(`A média da sala JS é ${calculaMedia(salaJS)}`);
//E assim sucessivamente para as outras salas