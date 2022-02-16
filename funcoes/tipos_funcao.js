//#1. Função COM parâmetro e COM retorno.
function somar(a, b) {
    return a + b;
}
let resultado = somar(30, 56);
console.log(resultado);
console.log(somar(30, 56));

//#2. Função COM parâmetro e SEM retorno.
function exibirMultiplicacao(a,b) {
    console.log(a*b);
}

//#3. Função SEM parâmetro e SEM retorno.

function retornarDataAtual() {
    return new Date();
}
console.log(retornarDataAtual());

//#3. Função SEM parâmetro e SEM retorno.

function exibirHoraAtual() {
    console.log(new Date().getHours());
}
exibirHoraAtual();