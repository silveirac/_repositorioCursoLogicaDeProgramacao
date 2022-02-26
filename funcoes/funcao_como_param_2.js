function executar(fn, a, b) {
    if (typeof fn === "function") {
        console.log(fn(a, b));
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

executar(somar, 90, 40);
executar(subtrair, 90, 40);
executar(multiplicar, 90, 40);
executar(dividir, 90, 40);