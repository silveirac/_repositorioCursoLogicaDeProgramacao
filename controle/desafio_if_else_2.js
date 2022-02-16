/* Transformar nota em conceito:

A = 9 a 10
B = 7 a 8.99
C = 5 a 6.99 
D = 4.5 a 4.99
F = menor que 4.5

*/

const gradeNum = 11;
let gradeConcept

if (gradeNum >= 9 && gradeNum <= 10) {
    gradeConcept = "A";
} else if (gradeNum >= 7 && gradeNum < 9) {
    gradeConcept = "B";
} else if (gradeNum >= 5 && gradeNum < 7) {
    gradeConcept = "C";
} else if (gradeNum >= 4.5 && gradeNum < 5) {
    gradeConcept = "D";
} else if (gradeNum < 4.5 && gradeNum >= 0) {
    gradeConcept = "F";
} else {
    gradeConcept = "Valor abaixo de 0 ou acima de 10. Revisar o valor lançado."
}
console.log(gradeConcept);