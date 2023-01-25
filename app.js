// Buttons
let startMenu = document.querySelector(".startMenu");
let GameMenu = document.querySelector(".gameMenu");
let gameGame = document.querySelector(".game");

let startButton = document.querySelector(".start-button");
let backButton = document.querySelector(".back-button");
let nextButton = document.querySelector(".next-1-button");
let exitButton = document.querySelector(".exit-button");

let name1 = document.querySelector(".name1");
let name2 = document.querySelector(".name2");

let points1 = document.querySelector(".p1Points");
let points2 = document.querySelector(".p2Points");

//Flag Mechanics
let rFlag;
let bFlag;

let rFlagArea;
let bFlagArea;

//




//Player Mechanics
let p1Cube;
let p2Cube;

let p1Name;
let p2Name;

let p1Points = 0;
let p2Points = 0;

let pSpeed = 5;


//Functions
function gameMenu() {
    startMenu.classList.toggle("hidden");
    GameMenu.classList.toggle("hidden");
}

function game() {
    gameGame.classList.toggle("gameHidden");
    GameMenu.classList.toggle("hidden");
    p1Name = document.querySelector(".p1Name").value;
    p2Name = document.querySelector(".p2Name").value;
    name1.innerHTML = p1Name;
    name2.innerHTML = p2Name;
    points1.innerHTML = p1Points;
    points2.innerHTML = p2Points;
}

function cFlag() {

}

function cMap() {

}

//Button Functions
startButton.addEventListener("click", gameMenu);
backButton.addEventListener("click", gameMenu);
nextButton.addEventListener("click", game);
exitButton.addEventListener("click", game);


//P1 Movement



