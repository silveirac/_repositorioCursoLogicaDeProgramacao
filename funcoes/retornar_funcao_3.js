function somar1(a, b) {
    return a + b
}

console.log(somar1(5, 4));

//posso utilizar parâmetros de funções superiores em funções ninhadas
function somar2(a) {
    return function (b) { //a função anônima não recebe o parâmetro a, mas pode utilizá-lo na execução de seus comandos, pois a função acima recebe.
        return a + b;
    }
}

console.log(somar2(5)());

let somarMais10 = somar2(10);
console.log(somarMais10(8));