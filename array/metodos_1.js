const num = [1, 2, 3, 4, 5];
console.log(num);

//alterando valores específicos do array
num[0] = 100; //altera o valor do primeiro elemento do array para 100
console.log(num);

//METODO [push] - adiciona um novo elemento no final do array.
num.push(6);
console.log(num);

//METODO [join] - concatenar os elementos de um array (com o separador escolhido) em uma string
console.log(num.join(" | ")); //funciona apenas imprimindo-o

//METODO [concat] - adiciona novos ementos ao final do array. Se diferencia de PUSH, pois cria um novo array e não modifica o original.
numConcat = num.concat(7, 8, 9);
console.log(numConcat);
console.log(num);

//METODO [includes] - verifica se um determinado elemento está dentro do array
console.log(num.includes(10)); //retorna verdadeiro ou falso
console.log(num.includes(6));

//METODO [indexOf] - verifica o índice de um elemento dentro do array
num.push(4);
console.log(num.indexOf(4)); //retorna o índice do primeiro "4" encontrado
console.log(num.indexOf(4, 4)); //retorna o indice do primeiro "4" encontrado do índice 4 para frente
console.log(num.indexOf(7)); //retorna "-1" caso o número procurado não faça parte do array
