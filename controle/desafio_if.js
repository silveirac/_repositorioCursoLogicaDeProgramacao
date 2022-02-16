let nota = -1
;

//Expressões de conceitos
const conceitoA = nota >= 9 && nota <= 10;
const conceitoB = nota >= 7 && nota < 9;
const conceitoC = nota >= 5 && nota < 7;
const conceitoD = nota >= 4.5 && nota < 5;
const conceitoF = nota < 4.5 && nota >= 0;
const erroNota = nota < 0 || nota > 10

if (conceitoA) {
    console.log("Conceito: A");
}

if (conceitoB) {
    console.log("Conceito: B");
}

if (conceitoC) {
    console.log("Conceito: C");
}

if (conceitoD) {
    console.log("Conceito: D");
}

if (conceitoF) {
    console.log("Conceito: F");
}

if (erroNota) {
    console.log("Nota lançada incorretamente. Verifique!");
}



