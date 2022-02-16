/* Converter notas de conceito para valores numéricos

A - 10
B+ - 9.5
B - 9
C+ - 8.5
C - 8
D+ - 7.5
D- - 7
F - < 7 (fail)
*/

let conceito = "F   ";
let nota;

switch (conceito) {
    default:
        nota = "nota inválida";
    case "A":
        nota = 10; break
    case "B+":
        nota = 9.5; break
    case "B":
        nota = 9; break
    case "C+":
        nota = 8.5; break
    case "C":
        nota = 8; break
    case "D+":
        nota = 7.5; break
    case "D":
        nota = 7; break
    case "F":
        nota = "Nota abaixo da média. Entre 6.9 e 0"; break
}
console.log(nota);