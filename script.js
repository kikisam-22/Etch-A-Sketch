const gridContainer = document.querySelector("#grid-container");
let gridSize = 32;

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

