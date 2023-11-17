// Utilizando o forEach com funções Callback - call back


const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {

    console.log(nome);

})

// A mesma função escrita em aroow function


nomes.forEach((nome) => {

    console.log(nome);

})

//A mesma função escrita de forma declarada

function imprimeNome (nome) {

    console.log(nome);

}

nomes.forEach(imprimeNome);
