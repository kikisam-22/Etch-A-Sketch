const circle = document.querySelector(".round");
const gridContainer = document.querySelector("#grid-container");
let gridSize = 16;

function createDivs(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++){
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridSquare.setAttribute("id", `row-${i}-column-${j}`);
            gridContainer.appendChild(gridSquare);
        }
    }
}

document.documentElement.style.setProperty('--gridSize', gridSize);

createDivs(gridSize)

const gridSquares = document.querySelectorAll(".grid-square");

function chooseButton(buttonNumber) {
    const button = document.getElementById("button" + buttonNumber);

    const isChosen = button.classList.contains("chosen");

    for (let i = 1; i <= 4; i++){
        const otherButton = document.getElementById("button" + i);
        otherButton.classList.remove("chosen");
        otherButton.classList.remove("active");
    }
    
    if (!isChosen){
        button.classList.add("chosen");
        button.classList.add("active");
    }

}

function randomColor(){
    const availableColor = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
    let randomIndex = Math.floor(Math.random() * availableColor.length);
    return availableColor[randomIndex]
}

function updateSquareColor(color){
    gridSquares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.cssText=`background-color : ${color} `
        })
    })
}

function activeOriginalMode(){ 
    if(document.getElementById("button1").classList.contains("active")) {
        updateSquareColor("black");
        circle.style.cssText = "background: black";
    }
}

function activeRainbowMode(){
    if(document.getElementById("button2").classList.contains("active")) {
        gridSquares.forEach((square) => {
            square.addEventListener("mouseover", () => {
                square.style.cssText=`background-color : ${randomColor()} `
            })
        });
        circle.style.cssText = "background: rgb(255,0,0); background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 50%, rgba(238,130,238,1) 100%);"
    }
}

function activeEraseMode(){
    if(document.getElementById("button3").classList.contains("active")) {
        updateSquareColor();
        circle.style.cssText = "background:"

    }

}

function resetAll(){
    const resetButton = document.querySelector("#button4");
    const orinalButton = document.querySelector("#button1");
    gridSquares.forEach((square) => {
        square.style.cssText="background-color: "
    });
    resetButton.classList.remove("active");
    resetButton.classList.remove("chosen");
    orinalButton.classList.add("active");
    orinalButton.classList.add("chosen");
    activeOriginalMode()    
}

activeOriginalMode()
