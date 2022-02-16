const a = 8;
const b = 4;
const operacao = "/";

let sum = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;

let resposta = 
    operacao === "+" ? sum :
        operacao === "-" ? sub :
             operacao === "*" ? mult : div;

console.log(resposta);
