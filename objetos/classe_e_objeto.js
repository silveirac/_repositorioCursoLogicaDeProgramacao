class Date {
    // day;
    // month;
    // year;
    
    constructor(day = 1, month = 1, year = 1900) { //para se definir parâmetros à classe, utiliza-se o constructor
        this.day = day;
        this.month = month;
        this.year = year;
    }

    exibir() {
        return `${this.day}/${this.month}/${this.year}`;
    };
};

const d1 = new Date(02, 03, 2022);
const d2 = new Date();

console.log(d1.exibir());
console.log(d2.exibir());

console.log(d1);
console.log(d2);