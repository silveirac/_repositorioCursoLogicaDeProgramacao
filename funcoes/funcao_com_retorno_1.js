function sempreRetornaUm() {
    return 200;
}

function textoOuNumero(retornaTexto){
    return retornaTexto ? "Sou um texto" : 123;
}
let valor = sempreRetornaUm();
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));