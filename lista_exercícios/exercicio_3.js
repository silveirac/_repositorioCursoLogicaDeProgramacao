/*
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um 
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ 
X", em que X é o quanto o funcionário ganhou no mês
*/

function wageCalc (laborHours, hourValue) {
    let wage = laborHours * hourValue;
    let netWage = wage * 0.7;
    return `Salário igual a R$${netWage.toFixed(2)}`
}
//usa-se toFixed(2) para retornar uma string com duas casas decimais a partir do valor de "wage".

console.log(wageCalc(120, 25));



//pode-se ainda adicionar os impostos como parâmetros da função
function wageCalc2(labourHours, hourValue, tax) {
    let wage2 = labourHours * hourValue;
    let netWage2 = wage2 * ((100 - tax)/100);
    return `Salário igual a R$${netWage2.toFixed(2)}`;
};

console.log(wageCalc2(150, 32, 15));