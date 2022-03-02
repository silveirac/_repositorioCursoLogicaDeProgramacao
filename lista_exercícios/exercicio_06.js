/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o 
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for 
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será  1. Se o parâmetro 
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do 
tipo ..."
*/

function inversion(value) {
    if (typeof value === "boolean") {
        return value === true ? false : true
    } else {
        return typeof value === "number" ? -value : `booleano ou número esperados, mas o parâmetro é do tipo ${typeof value}`
    }
}

//testes
console.log(inversion(true)); //false
console.log(inversion(35)) //-35
console.log(inversion("false")); //booleano ou número esperados, mas o parâmetro é do tipo string