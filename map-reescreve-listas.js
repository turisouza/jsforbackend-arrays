// Alterando estrings com map
// Padronizando nomes com o map

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomespadronizados = nomes.map((nome) => {

    return nome.toUpperCase();

})

//Uma outra forma mais sucinta de escrever a mesma função

const nomespadronizados2 = nomes.map((nome) => nome.toUpperCase());