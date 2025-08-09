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

function generate() {

    if (!isEmpty()) {

    }

    const result = isEmpty();
    gameBoard[result.r][result.c] = 2;
}

function isEmpty() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (gameBoard[r][c] === 0) {
                return { r, c };
            } else {
                return false;
            }
        }
    }
}

function slideRight() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            if (gameBoard[r][c] === gameBoard[r + 1][c]) {
                gameBoard[r][c] += gameBoard[r + 1][c];
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