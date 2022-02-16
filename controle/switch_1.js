let nota = 15.2

switch (Math.ceil(nota)) {
    default:
        console.log("Nota inválida")
        break; //caso não seja colocado break, ele executara todas as sentenças das linhas abaixo

    //Aprovação
    case 10:
    case 9:
    case 8:
    case 7:
        console.log("Parabéns");
        break;

    //Reprovação
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Reprovado");
        break;
    }
console.log("fim");
