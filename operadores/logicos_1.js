let temDinheiro = true;
let estaEnsolarado = true   ;
let carroEstaNaGaragem = true;

let resultadoE = "#01. Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado
console.log(resultadoE);

let resultadoOu = "#02. Vai pro shopping? ";
resultadoOu += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOu);

console.log(true != false);
console.log(true !== true);
console.log(false !== true);
console.log(false !== false);
console.log(1 ^ true);

console.log("Não verdadeiro: " + !true);
console.log("Não falso: " + !false);

