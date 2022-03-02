const user = {
    email: "aluno@javascript.com.br",
};

console.log(user.email);
console.log(user.name); //retorna undefined, pois "user" não possui o atributo "name".

user.name = "Cauê"; //define o atributo "name" para objeto "user". Ou seja, "user" passa a ter o atributo "name"

console.log(user.name);

user.password = "dev123";

console.log(user); //mostra todos os atributos e métodos pertencentes ao objeto "user"

