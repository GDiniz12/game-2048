const row = 4;
const column = 4;

let gameBoard = [
    [128, 0, 128, 2],
    [0, 2, 0, 2],
    [4, 0, 2, 0],
    [8, 8, 16, 16]
]

function fillContainer() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            const nDiv = document.createElement("div");
            nDiv.className = "squares";
            nDiv.id = r + "-" + c;
            document.getElementById("board").appendChild(nDiv);
        }
    }
}

function square(r, c) {
    const x2 = document.createElement("div");
    x2.className = 'x2';
    x2.innerText = "2";
    document.getElementById(`${r}-${c}`).appendChild(x2);
}

function generate() {
    const result = isEmpty();
    if (!result) {
        return;
    }
    
    gameBoard[result.r][result.c] = 2;
    square(result.r, result.c);
}

function isEmpty() {

    let areEmpty = [];
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (gameBoard[r][c] === 0) {
                areEmpty.push({ r, c });
            }
        }
    }

    const raffle = Math.floor(Math.random() * areEmpty.length);
    const result = areEmpty[raffle];
    return result;
}

function moveRight(row) {
    // 1. Empurra para a direita (remove zeros no meio)
    row = row.filter(v => v !== 0); // remove zeros
    while (row.length < 4) row.unshift(0); // preenche com zeros na frente

    // 2. Faz as fusões (da direita para esquerda)
    for (let c = 3; c > 0; c--) {
        if (row[c] === row[c - 1] && row[c] !== 0) {
            row[c] *= 2;       // soma
            row[c - 1] = 0;    // posição anterior vira zero
        }
    }

    // 3. Empurra de novo para a direita
    row = row.filter(v => v !== 0);
    while (row.length < 4) row.unshift(0);

    return row;
}

function moveLeft(row) {
    // 1. Empurra para a direita (remove zeros no meio)
    row = row.filter(v => v !== 0); // remove zeros
    while (row.length < 4) row.push(0); // preenche com zeros na frente

    // 2. Faz as fusões (da direita para esquerda)
    for (let c = 0; c < 3; c++) {
        if (row[c] === row[c + 1] && row[c] !== 0) {
            row[c] *= 2;       // soma
            row[c + 1] = 0;    // posição anterior vira zero
        }
    }

    // 3. Empurra de novo para a direita
    row = row.filter(v => v !== 0);
    while (row.length < 4) row.push(0);

    return row;
}

function moveUp(column) {
    // 1. Empurra para a direita (remove zeros no meio)
    column = column.filter(v => v !== 0); // remove zeros
    while (column.length < 4) column.push(0); // preenche com zeros na frente

    // 2. Faz as fusões (da direita para esquerda)
    for (let c = 0; c < 3; c++) {
        if (column[c] === column[c + 1] && column[c] !== 0) {
            column[c] *= 2;       // soma
            column[c + 1] = 0;    // posição anterior vira zero
        }
    }

    // 3. Empurra de novo para a direita
    column = column.filter(v => v !== 0);
    while (column.length < 4) column.push(0);

    return column;
}

// for (let i = 0; i < gameBoard.length; i++) {
//     gameBoard[i] = moveRight(gameBoard[i]);
// }

for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = moveLeft(gameBoard[i]);
}

console.log(gameBoard)



fillContainer()
generate()
generate()
