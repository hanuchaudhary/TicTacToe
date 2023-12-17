let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let winnerText = document.querySelector(".winScreen h1");
let winnerScreen = document.querySelector(".winScreen");

let turn = true;
let array = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

let disableBtns = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
}

let showWinner = (winner) => {
    winnerText.innerText = `Winner: ${winner}`;
    winnerScreen.style.transform = "scale(1)"
    disableBtns();
}

function game() {
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (turn == true) {
                box.innerText = "X"
                turn = false
            }
            else {
                box.innerText = "O"
                turn = true;
            }
            box.disabled = true;
            winner();
        })
    });
}
game();

function winner() {
    for (let pattern of array) {
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;
        if (pos0val != "" && pos1val != "" && pos2val != "") {
            if (pos0val == pos1val && pos1val == pos2val) {
                showWinner(pos0val);
            }
        }
    }
}

let resetGame = () => {
    turn = true;
    disableBtns();
    boxes.innerText = ""
    winnerScreen.style.transform = "scale(0)"
}

newGame.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)