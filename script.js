const gridContainer = document.querySelector("#grid-container");

function createDivs(numberOfRows, numberOfColumns) {
    for (numberOfRows; numberOfRows>0; numberOfRows--) {
        let gridNumberOfRows = document.createElement("div");
        gridNumberOfRows.classList.add("row");
        gridNumberOfRows.setAttribute("id",`row_${numberOfRows}`);
        gridContainer.appendChild(gridNumberOfRows);
    }

    for (numberOfColumns; numberOfColumns>0; numberOfColumns--){
        let gridNumberOfColumns = document.createElement("div");
        gridNumberOfColumns.classList.add("row");
        gridNumberOfColumns.setAttribute("id", `column_${numberOfColumns}`);
        gridContainer.appendChild(gridNumberOfColumns);
    }
}

createDivs(16, 16)