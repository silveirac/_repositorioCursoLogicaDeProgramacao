function showData(day, month, year) {
    return {
        day, //caso sejam utilizados os parâmetros da função como atributos de um objeto, pode-se escrever dessa forma ao invés de "chave: valor"
        month,
        year,
        show() { //nas versões mais atuais do JS, pode-se prescindir de "function:" para se definir uma função dentro de um objeto
            return `${this.day}/${this.month}/${this.year}`;
        }
    };
};

const d1 = showData(02, 03, 2022);
const d2 = showData(25, 12, 2022);
const d3 = showData(03, 10, 1991);

console.log(d1.show());
console.log(d2.show());
console.log(d3.show());