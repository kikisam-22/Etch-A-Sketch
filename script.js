const gridContainer = document.querySelector("#grid-container");
let gridSize = 16;

function createDivs(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; i++){
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridSquare.setAttribute("id", `row-${i}-column-${j}`);
            gridSquare.style.cssText="flex:0 0 calc(100%/gridSize), box-sizing: border-box, border: 1px solid gray"
            gridContainer.appendChild(gridSquare);
        }
    }
}
createDivs(gridSize)

const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("hovered")
    })
})
