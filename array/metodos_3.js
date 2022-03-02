const num = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i <= (num.length - 1); i++) {
//     console.log(i, num[i]);
// }
//METODO [forEach]
function paraCadaElemento(element, index, fullArray) {
    console.log(element, index, fullArray);
} // caso não me importe com o valor de outros parâmetros, substituir por "_" (i.e.: paraCadaElemento(_, _, fullArray))

num.forEach(paraCadaElemento); //executa esta função N vezes, sendo N = .length

