let qtd = 0;
let threshold = 0.9999

//quantidade indeterminada de repetições (repete ATÉ que o número randomico seja maior ou igual ao threshold)
while (Math.random() < threshold) {
    qtd++;
}

console.log(qtd + " números menores que " + threshold);
