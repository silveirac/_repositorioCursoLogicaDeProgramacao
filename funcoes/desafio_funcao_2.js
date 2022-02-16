// Parâmetro (Nota) -> Retorno (Conceito)

function conversNotaConceito(nota) {
    if (Math.ceil(nota) <= 6.5) {
        return "F";
    } else {
        switch (Math.ceil(nota)) {
            case 10: return "A";
            case 9.5: return "B+";
            case 9: return "B";
            case 8.5: return "C+";
            case 8: return "C";
            case 7.5: return "D+";
            case 7: return "D";
            default: return null;

        }

    }
}

console.log(conversNotaConceito(9.3));