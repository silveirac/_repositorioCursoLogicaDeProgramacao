/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repeatValue (value, numRep) {
    const repeatArray = [];
    for (let i = 0; i < numRep; i++) {
        repeatArray.push(value);
    }
    return repeatArray;
}

console.log(repeatValue("Cauê", 5));

//utilizando-se WHILE e CONCAT
function repeatValue2(value, numRep) {
    let repeatArray2 = [];
    while (repeatArray2.length < numRep) {
        repeatArray2 = repeatArray2.concat(value);
    }
    return repeatArray2;
}

console.log(repeatValue2("Silveira", 4));
