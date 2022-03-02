/*
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias
Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e 
desconsidere também dias decorridos desde o último aniversário.
*/

function convertYearsToDays(ageYears) {
    return ageYears * 365;
}

console.log(convertYearsToDays(1));

//posso também salvar a conversão em uma variável

let ageDays = convertYearsToDays(30);
console.log(ageDays);