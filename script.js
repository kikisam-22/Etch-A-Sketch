const gridContainer = document.querySelector("#grid-container");

function createDivs(numberOfRows, numberOfColumns) {
    numberOfColumns = 16;
    numberOfRows = 16;
    for (numberOfRows; numberOfRows>0; numberOfRows--) {
        let gridNumberOfRows = document.createElement("div");
        gridNumberOfRows.classList.add("row");
        gridNumberOfRows.setAttribute("id",`row-${numberOfRows}`);
        gridNumberOfRows.style.cssText = "background-color:white; border:2px solid black; height:100px; width:100px";
        gridContainer.appendChild(gridNumberOfRows);
        for (numberOfColumns--; numberOfColumns>0; numberOfColumns--){
            let gridNumberOfColumns = document.createElement("div");
            gridNumberOfColumns.classList.add("column");
            gridNumberOfColumns.setAttribute("id", `row-${numberOfRows}-column-${numberOfColumns}`);
            gridNumberOfColumns.style.cssText = "background-color:white; border:2px solid black; height:100px; width:100px"
            gridContainer.appendChild(gridNumberOfColumns);
        }
        numberOfColumns = 16;
    }
}

createDivs()