function retornarFunc() {
    return function () {
        return function () {
            return "Boa tarde!";
        }
    }
}

console.log(retornarFunc);
console.log(retornarFunc());
console.log(retornarFunc()());
console.log(retornarFunc()()());