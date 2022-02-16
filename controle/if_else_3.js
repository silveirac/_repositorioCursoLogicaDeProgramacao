const hora = 17;
let saudacao;

if (hora < 12) {
    if (hora >= 6) {
        saudacao = "Bom dia!";
    } else {
        saudacao = "Boa noite!";
    }

} else {
    if (hora < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }
}
console.log(saudacao);