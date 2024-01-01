const circle = document.querySelector(".round");
const gridContainer = document.querySelector("#grid-container");
const rangeChosen = document.querySelector("#range-chosen");
const range = document.getElementById("myrange");
const resetButton = document.querySelector("#button4");
const originalButton = document.querySelector("#button1");
let gridSquares; 
let valueOfRange = range.value;

rangeChosen.textContent=`${valueOfRange}x${valueOfRange}`;

range.addEventListener("input", function() {
    valueOfRange = this.value;
    rangeChosen.textContent = `${valueOfRange}x${valueOfRange}`;   
    document.documentElement.style.setProperty('--valueOfRange', valueOfRange);
    if (originalButton.classList.contains("chosen")){
        //
    } else {chooseButton(1)};
    createDivs(valueOfRange);
});

function createDivs(valueOfRange) {
    gridContainer.innerHTML = "";

    for (let i = 0; i < valueOfRange; i++) {
        for (let j = 0; j < valueOfRange; j++){
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridSquare.setAttribute("id", `row-${i}-column-${j}`);
            gridContainer.appendChild(gridSquare);
        }
    }
    gridSquares = document.querySelectorAll(".grid-square");  

    addEventListener();

}

document.documentElement.style.setProperty('--valueOfRange', valueOfRange);

createDivs(valueOfRange);

function addEventListener(){
    gridSquares.forEach((square) => {
        square.addEventListener("mouseover", () => handleMouseOVer())
    })
}

function handleMouseOVer(){
    if(document.getElementById("button1").classList.contains("active")) {
        updateSquareColor("black");
        circle.style.cssText = "background: black";
    } else if (document.getElementById("button2").classList.contains("active")) {
        gridSquares.forEach((square) => {
            square.addEventListener("mouseover", () => {
                square.style.cssText=`background-color : ${randomColor()} `
            })
        });
        circle.style.cssText = "background: rgb(255,0,0); background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 50%, rgba(238,130,238,1) 100%);"
    } else if (document.getElementById("button3").classList.contains("active")) {
        updateSquareColor();
        circle.style.cssText = "background:"
    }
}

function chooseButton(buttonNumber) {
    const button = document.getElementById("button" + buttonNumber);

    const isChosen = button.classList.contains("chosen");
    const isActive = button.classList.contains("active");

    for (let i = 1; i <= 4; i++){
        const otherButton = document.getElementById("button" + i);
        otherButton.classList.remove("chosen");
        otherButton.classList.remove("active");
    }
    
    if (!isChosen || !isActive){
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

function resetAll(){
    gridSquares.forEach((square) => {
        square.style.cssText="background-color: "
    });
    chooseButton(1);
    range.value = 16;
    valueOfRange = range.value;
    createDivs(valueOfRange);
    rangeChosen.textContent = `${valueOfRange}x${valueOfRange}`;
    document.documentElement.style.setProperty('--valueOfRange', valueOfRange);
}