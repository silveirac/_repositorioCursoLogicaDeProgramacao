const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//direto, utilizando-se indice (sem foreach)
for (let i = num.length - 2; i >= 0; i -= 2) {
    console.log(i, num[i]);
}
