const t1 = false;
const t2 = false;

let comprarTv50 = t1 && t2;
console.log('Vamos comprar a TV 50"?', comprarTv50);

let comprarTv32 = t1 !== t2;
console.log('Vamos comprar a TV 32"?', comprarTv32);

let tomarSorvete = t1 || t2;
console.log('Vamos comprar sorvete?', tomarSorvete);

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa?', ficarEmCasa);
