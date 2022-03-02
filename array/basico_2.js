//definir os elementos de uma array após a criação da array

const nomes = [];

nomes[0] = "Pedro";
nomes[1] = "Ana";
nomes[2] = "Bia";
nomes[3] = "Gui";
nomes[4] = "Rebeca";
nomes[5] = "Thiago";

console.log(nomes);

nomes[5] += " da Silva"; //concatenando valores em um elemento do array

console.log(nomes);

nomes[6] = 45;

console.log(nomes);

nomes[6]++ //caso o elemento seja um número ele realiza a operação indicada

console.log(nomes);

nomes[1] -= 5;

console.log(nomes); //ao tentar somar um nome com um texto, retorna NaN (como esperado)