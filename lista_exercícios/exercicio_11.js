/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo 
array
*/

function firtsLastArray(array) {
    newArray = [array[0], array[array.length - 1]];
    return newArray;
} 

sequence = [];

//  teste #1
sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(firtsLastArray(sequence));

//  teste #2
sequence = [ 2, 3, 4, 5, 6, 7, 8];
console.log(firtsLastArray(sequence));