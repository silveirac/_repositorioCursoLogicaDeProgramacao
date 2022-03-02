//posso ter objetos e arrays dentro de objetos

const user = {
    register: 000001,
    name: "Delegado Pacheco",
    isVip: true,
    address: {
        country: "Brazil",
        state: "São Paulo",
        city: "Campinas",
        street: "Rua Sebastião de Souza, 150",
        complement: "Chief's Office",
        zipCode: "13013-173",
        
    },
    childrenNames: ["Bia", "Joaquim", "Pedro"],
};

console.log(`País de origem: ${user.address.country}`); //acessando o atributo "country" do objeto "address" inserido dentro do objeto "user"
console.log(`Nome de seu/sua filho(a) mais velho(a): ${user.childrenNames[0]}`);
console.log(`Nome de seu/sua filho(a) caçula: ${user.childrenNames[user.childrenNames.length - 1]}`);