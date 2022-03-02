//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo

//usando-se if else
function isEqualOrHigher(a, b) {
    if (typeof a == typeof b) {
        return a >= b;
    } else {
        return "valores incompatíveis";
    }
}

//teste com expectativa de resultado negativo
console.log(isEqualOrHigher("52", 96));
//teste com expectativa de resultado positivo
console.log(isEqualOrHigher(520, 96));




//usando-se operador ternário

function isEqualOrHigher2(a, b) {
    return typeof a >= typeof b ? a >= b : "valores incompatíveis"
}

//teste com expectativa de resultado incompatível
console.log(isEqualOrHigher2(15, "25"));
//teste com expectativa de resultado negativo
console.log(isEqualOrHigher2(15, 25));
//teste com expectativa de resultado positivo
console.log(isEqualOrHigher2(7, 7));