function showData(day, month, year) {
    return { //return é definido como um objeto
        day: day,
        month: month,
        year: year,
        show: function() {
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

//esta forma de se escrever reduz o número de repetições, mas será mais simplificado.
//isso mostra a importância de clean code para criação e manutenção de códigos.