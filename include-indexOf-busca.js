
// Fazendo busca em um array com include e indexOf
// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {

    if (listaDeAlunosEMedias[0].includes(aluno)) {

        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];
        //É a mesma coisa que:
        const [alunos, medias] = listaDeAlunosEMedias;
        
        //o método includes verifica se o parâmetro passado está incluso na lista
        console.log("Aluno Cadastrado")

        //aqui é usada a função indexOf para buscar o índice do elemento do parâmetro
        const indice = alunos.indexOf(aluno)

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);

    } else {

        console.log("Aluno não cadastrado")
    }
}

exibeNomeENota("João"); //aluno cadastrado