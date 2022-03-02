//em programação orientada a objetos: os OBJETOS recebem METODOS que funcionam como funções direcionadas a estes objetos.

//por exemplo: para o objeto "console" existe o metodo "log" que imprime NO CONSOLE o valor referente à expressão escrita dentro do parênteses.
console.log(typeof console);
console.log(typeof console.log);

const numeros = [1, 2, 3];
console.log(typeof numeros);
console.log(numeros);

//além de métodos há os atributos que retornam alguma característica ou propriedade do objeto.
console.log(`Comprimento do array: ${numeros.length}`);

numeros.push(4);
numeros.push(5);

console.log(numeros);

console.log(`Comprimento do array: ${numeros.length}`);