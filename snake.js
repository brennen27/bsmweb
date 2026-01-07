const playBoard = document.querySelector(".play-board");
let foodX = 13, foodY = 10;


const initGame = () => {
let htmlMarkup = '<div class="food" style="grid-area:  ${foodY} / ${foodY}"></div>';
playBoard.innerHTML = htmlMarkup;


}
initGame();