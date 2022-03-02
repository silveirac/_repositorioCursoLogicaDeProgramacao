/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se 
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha 
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro 
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não 
considerando se numero é igual a minimo ou a maximo.
*/

//usando-se if
function inBetween(num, min, max, inclusive = false) {
    if (inclusive === true) {
        return num >= min && num <= max
    } else {
        return num > min && num < max
    }
}

console.log(inBetween(500, 500, 1000)); //false
console.log(inBetween(500, 500, 1000, true)); //true
console.log(inBetween(300, 350, 1000, true)); //false
console.log(inBetween(999, 350, 1000, false)); //true

//usando-se operador ternário
function inBetween2(num, min, max, inclusive = false) {
    return inclusive === true ?
        num >= min && num <= max :
        num > min && num < max;
}

console.log(inBetween2(500, 500, 1000)); //false
console.log(inBetween2(500, 500, 1000, true)); //true
console.log(inBetween2(300, 350, 1000, true)); //false
console.log(inBetween2(999, 350, 1000, false)); //true