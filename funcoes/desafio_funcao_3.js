const n1 = 7.8;
const n2 = 3.1;
const n3 = 6.7;

/*
function mediaBondosa(a, b, c) {

    if (a < b && a < c) {
        return (b + c) / 2;
    } else if (b < c) {
        return (a + c) / 2;
    } else {
        return (a + b) / 2;
    }
}

console.log(mediaBondosa(7,8, 3.1, 6.7));
*/

function minimo(a, b) {
    return a <= b ? a : b;
}

function mediaNumerica(a, b, c) {
    let menorNota = minimo(minimo(a, b), c);
    return (a + b + c - menorNota)/2;
}

function mediaParaStatus(a, b, c) {
    let mediaNum = mediaNumerica (a, b, c);
    return  mediaNum >= 7 ? "APROVADO": (mediaNum >= 4) ? "EM RECUPERAÇÃO": "REPROVADO";
}

console.log(`O aluno encontra-se ${mediaParaStatus(n1, n2, n3)} em função da média ${mediaNumerica(n1, n2, n3)} obtida no semestre.`);