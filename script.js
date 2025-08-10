const row = 4;
const column = 4;

let gameBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
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

function slideRight() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (gameBoard[r][c] === gameBoard[r][c + 1] && gameBoard[r][c] !== 0) {
                gameBoard[r][c] += gameBoard[r][c + 1];
            } else if (gameBoard[r][c + 1] === 0 && gameBoard[r][c + 2] === 0) {
                gameBoard[r][c] = gameBoard[3][c]
                gameBoard[r][c] = 0;
            }
        }
    }
}

function slideLeft() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (gameBoard[r][c] === gameBoard[r - 1][c]) {
                gameBoard[r][c] += gameBoard[r - 1][c];
            }
        }
    }
}

function slideUp() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (gameBoard[r][c] === gameBoard[r][c - 1]) {
                gameBoard[r][c] += gameBoard[r][c - 1];
            }
        }
    }
}

function slideDown() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (gameBoard[r][c] === gameBoard[r][c + 1]) {
                gameBoard[r][c] += gameBoard[r][c + 1];
            }
        }
    }
}

fillContainer()
generate()
generate()
console.log(isEmpty())
console.log(isEmpty())