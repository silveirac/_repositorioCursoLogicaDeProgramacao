//declaração de uma variável como array
//              0    1    2   3    4    5
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

console.log(notas);
console.log(notas[3], notas[2]); // é assim que se acessa elementos específicos do array
console.log(notas[6]);
console.log(notas[0]);

//alterando o valor de um elemento do array. (obs.: não é possível alterar a constante "notas", mas é possível alterar os valores dentro do array)

notas[3] = 9.2;

console.log(notas);