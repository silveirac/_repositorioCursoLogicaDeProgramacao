// [1, 1], [1, 2], [1, 3]
// [2, 1], [2, 2], [2, 3]
// [3, 1], [3, 2], [3, 1]


for (let i = 1; i <= 3; i++) {
    let line = "";
    for (let j = 1; j <= 3; j++){
        line += `[${i}, ${j}]`;
    }
    console.log(line);
}