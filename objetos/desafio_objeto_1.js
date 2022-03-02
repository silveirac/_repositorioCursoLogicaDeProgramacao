// Objeto data
// Atrbutos: dia, mes e ano
// Método: exibir -> deve exibir a data no formato "dd/mm/aaaa"

const data = {
    day: "02",
    month: "03",
    year: "2022",
    showData: function() {
        return `Data: ${this.day}/${this.month}/${this.year}`;
    },
};

console.log(data.showData());

//foram definidos dia, mês e ano como strings, pois para números menores que 10, são mostrados apenas 1 digito (ie.: é mostrado 1 e não 01)