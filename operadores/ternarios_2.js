// let hora = 14;
// let saudacao = hora < 12 ? "Bom dia!" : "Boa tarde!";
// console.log(saudacao);

const hora = 14;
const exp1 = hora < 12;
const exp2 = hora < 18;
const saudacao = exp1 ? "Bom dia!" : (exp2 ? "Boa tarde!" : "Boa noite!");

console.log(saudacao);