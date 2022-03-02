/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+"  na 
quantidade especificada no parâmetro
*/

function numToSimbol(num) {
    let simbolString = '';
    for (let i = 0; i < num; i++) {
        simbolString += '+';   
    }
    return simbolString;
}

// testes
console.log(numToSimbol(3));
console.log(numToSimbol(10));