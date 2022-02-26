function executar(funcao) {
    if (typeof funcao === "function") {
        console.log(funcao());
    }
}

function bomDia() {
    return "Bom dia";
}

executar(bomDia);