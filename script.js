const gridContainer = document.querySelector("#grid-container");
let gridNumberOfColumns;
let gridNumberOfRows;

function createDivs(numberOfRows, numberOfColumns) {
    numberOfColumns = 16;
    numberOfRows = 16;
    for (numberOfRows; numberOfRows>0; numberOfRows--) {
        gridNumberOfRows = document.createElement("div");
        gridNumberOfRows.classList.add("row");
        gridNumberOfRows.setAttribute("id",`row-${numberOfRows}`);
        gridNumberOfRows.style.cssText = "border:2px solid black; height:50px; width:50px";
        gridContainer.appendChild(gridNumberOfRows);
        for (numberOfColumns--; numberOfColumns>0; numberOfColumns--){
            gridNumberOfColumns = document.createElement("div");
            gridNumberOfColumns.classList.add("column");
            gridNumberOfColumns.setAttribute("id", `row-${numberOfRows}-column-${numberOfColumns}`);
            gridNumberOfColumns.style.cssText = "border:2px solid black; height:50px; width:50px"
            gridContainer.appendChild(gridNumberOfColumns);
        }
        numberOfColumns = 16;
    }
}
createDivs()

const rowDivs = document.querySelectorAll(".row");
const columnDivs = document.querySelectorAll(".column");

rowDivs.forEach((row) => {
    row.addEventListener("mouseover", () => {
        row.classList.add("hovered")
    })
})

columnDivs.forEach((column)=>{
    column.addEventListener("mouseover", () => {
        column.classList.add("hovered")
    })
})