const a = 10;
const b = 28;
const oper = "*"; // + - * /

let result;

if (oper === "+") {
    result = a + b;
} else if (oper === "-") {
    result = a + b;
} else if (oper === "*") {
    result = a * b;
} else if (oper === "/") {
    result = a / b;
}

console.log(result)

if (oper === "+") {
    result = a + b;
} else {
    if (oper === "-") {
        result = a - b;
    } else {
        if (oper === "*") {
            result = a * b;
        } else {
            if (oper === "/") {
                result = a / b;
            }
        }
    }
}
console.log(result);