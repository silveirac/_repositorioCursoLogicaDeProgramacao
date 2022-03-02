/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a 
multiplicação deles. Porém, não utilize o operador de mutiplicação
*/

//usando-se if
function product(num1, num2) {
    if (Math.sign(num1) === -1) {
        return "valor do primeiro número deve ser igual ou maior do que zero"
    } 
    else {
        if (Math.sign(num2) === -1) {
            return "valor do segundo número deve ser igual ou maior do que zero"
        }
        else {
            return Math.imul(num1, num2)
        }
    }
}

// testes
console.log(product(5, 7)); //35
console.log(product(-5, 7)); //valor do primeiro número deve ser igual ou maior do que zero
console.log(product(5)); //retorna valor 0