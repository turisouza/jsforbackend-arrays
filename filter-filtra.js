// filtrando elementos de um array com o filter

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

//Aqui vamos usar o filter que também receberá como parâmetro uma função callback
// Temos que retornar true or false para escolher os elementos
const reprovados = alunos.filter((aluno, indice) => {
    //aqui o parâmetro aluno não está sendo usado, poderia ser substituido por um _ (underline/underground)
    //neste caso estamos aplicando uma condição para o filter retornar o aluno
    return medias[indice] < 7;

})