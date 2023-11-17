// dividindo uma lista com slice
// separando uma lista com slice

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//alunos.slice(0, 10);
//Fatia a lista
//O primeiro parâmetro define o início do fatiado, o segundo o final
//O índice do ultimo parâmetro é ignorado, neste caso será de 0 a 9.
// este método não altera o array original

const sala1 = alunos.slice(0, 10);
// pode também usar no segundo parâmetro alunos.length/2

const sala2 = alunos.slice(10);
// quando não adicionamos o segundo parâmetro ele vai até o final da lista
//neste caso poderíamos usar alunos.length/2 no parâmetro

