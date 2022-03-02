const d1 = {
    day: 9,
    month: 10,
    year: 2011,
    show: function() {
        return `${this.day}/${this.month}/${this.year}`;
    },
    
};

const d2 = {
    day: 10,
    month: 11,
    year: 2012,
    show: function() {
        return `${this.day}/${this.month}/${this.year}`;
    },
    
};

const d3 = {
    day: 11,
    month: 12,
    year: 2013,
    show: function() {
        return `${this.day}/${this.month}/${this.year}`;
    },
    
};

//nota-se, na forma literal de escrita de um objeto, um excesso de repetições.  A correção deste "problema" é tratada na aula funcao_e_objeto_1.js