const data = {
    day: 01,
    month: 03,
    year: 2022,
};

console.log(`${data.day}/${data.month}/${data.year}`);

data.day = 03;
data.month = 10;
data.year = 1991;
/* 
Embora "data" seja uma constante, é possível alterar os valores de seus atributos (por padrão). 
O que não é possível é alterar a natureza de data, por exemplo:

data = "Hoje é feriado de carnaval" -> tentando alterar de objeto para string;
data = 3 -> tentando alterar de objeto para numero;
*/

console.log(`${data.day}/${data.month}/${data.year}`); 