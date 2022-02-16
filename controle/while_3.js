//quantidade indeterminada de repetições

let futuro = Date.now() + (10 * 1000);//em milissegundos, por isso * 1000
let qtdLaco = 0;
while (Date.now() < futuro) {
    qtdLaco++;
}
console.log(qtdLaco + " repetições!");

//134251497 repetições!
//133290818 repetições!
