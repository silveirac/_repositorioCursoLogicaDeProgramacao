function retornar() {

    function bomDia() {
        return "Bom dia!"
    }
    return bomDia;
}

console.log(retornar); // imprime a [função] e não seu resultado
console.log(retornar()); //imprime o resultado da função que,  no caso é uma [funcao]
console.log(retornar()()); // imprime o resultado da função que está dentro da função retornar.

//Ou seja, cada () solicida o RESULTADO de um dos níveis hierárquicos de um bloco.
/* 
func1() {
    func2() {
        func3() {
            ... {
                func-n() {
                }
            }
        }
        
    }
}

console.log(func1()) -> imprime a [FUNCAO 2], pois é o resultado da função func1
console.log(func1()()) -> imprime a [FUNCAO 3], pois é o resultado da função que está um nivel abaixo da função func
console.log(func1()()...()) -> imprime a [FUNCAO N]
*/