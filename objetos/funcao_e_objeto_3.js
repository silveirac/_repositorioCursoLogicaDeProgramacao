//Função Construtora - constroi um objeto (equivalente às Classes em outras linguagens)

function Date(day = 1, month = 1, year = 1900) { //como convenção/boas práticas quando a função é construtora, seu nome é capitalizado
    this.day = day;
    this.month = month;
    this.year = year;

    this.exibir = function () {
        return `${this.day}/${this.month}/${this.year}`
    };
};

let d1 = new Date(23, 02, 1998); //crio um objeto "Date" e o atribuo à variável "d1"
let d2 = new Date(); //caso não sejam passados valores para os parâmetros da função, serão utilizados os valores padrão (1, 1, 1900)
let d3 = new Date(02, 03, 2022);


console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

console.log(d1);
console.log(d2);
console.log(d3);