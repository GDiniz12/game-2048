const myArr = [
    [0, 0, 0, 0],
    [0, 2, 2, 0]
]

for (let i = 0; i < 2; i++) {
    for (let c = 0; c < 4; c++) {
    
        if (myArr[i][c + 1] === undefined) {
            console.log(2)
        }

        if (myArr[i][c] === myArr[i][c + 1] && myArr[i][c] !== 0) {
            myArr[i][c] += myArr[i][c + 1];
            myArr[i][c + 1] = myArr[i][c];
            myArr[i][c] = myArr[i][c - 1];
        } else if (myArr[i][c + 1] === 0 || myArr[i][c + 2] === 0 || myArr[i][c + 3] === 0 || myArr[i][c + 4] === 0 && myArr[i][c] !== 0) {
            // vou ter que fazer um loop aqui
             myArr[i][c + 1] = myArr[i][c + 2];
        } else {
            console.log(1)
        }
    }
}

console.log(myArr)