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

gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("hovered")
    })
})

function chooseButton(buttonNumber) {
    const button = document.getElementById("button" + buttonNumber);

    const isChosen = button.classList.contains("chosen");

    for (let i = 1; i <= 4; i++){
        const otherButton = document.getElementById("button" + i);
        otherButton.classList.remove("chosen");
    }
    
    if (!isChosen){
        button.classList.add("chosen")
    }
}