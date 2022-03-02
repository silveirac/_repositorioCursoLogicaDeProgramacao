const produto = {
    name: "tablet",
    price: 4990.00,
    discount: 0.10,
    finalPrice: function () {
        return this.price * (1 - this.discount); // "this" é usado para referenciar atributos ou métodos criados dentro próprio objeto. Ou seja, para que seja possível referenciar o tipo (type) do produto na função finalPrice é necessário dizer que estou falando o atributo "name" dentro desse (this) objeto. Caso contrário será procurada uma variável "name" externa ao objeto.
    }
};

console.log(produto.finalPrice(this.price, this.discount));