let bgColor = "black";

const div = document.createElement("div");
div.setAttribute("class", "square");

const container = document.querySelector("#container");
container.addEventListener("mouseover", (e) => makeTrail(e.target, bgColor));

const erase = document.querySelector("#prompt");
erase.addEventListener("click", promptErase);

const normalColor = document.querySelector("#normal");
normalColor.addEventListener("click", () => bgColor = "black");

const randomColor = document.querySelector("#rgb");
randomColor.addEventListener("click", () => bgColor = "random")

makeGrid(16);

function makeGrid(sideLength) {
    container.textContent = '';
    for (let i = 0; i < sideLength ** 2; i++) {
        const square = div.cloneNode();
        square.style.flex = `1 0 ${1/sideLength * 100}%`
        container.appendChild(square);
    }
}

function makeTrail(target, backgroundColor) {
    if (target.id === "container") return;
    if (backgroundColor === "random") {
        backgroundColor = getRandomColor()
    }
    target.style.backgroundColor = backgroundColor;
}

function promptErase() {
    const choice = +prompt("This will erase your grid and create a new one.\nWhat size should be the new grid?", 16)
    if (isNaN(choice)) {
        alert("Please enter a valid number")
    } else if (choice > 100) {
        alert("Please enter a smaller number (max. 100)")
    } else {
        makeGrid(choice)
    }
}

function getRandomColor() {
    const red = getRandomRGBValue()
    const green = getRandomRGBValue()
    const blue = getRandomRGBValue()
    return `rgb(${red}, ${green}, ${blue})`
}

function getRandomRGBValue() {
    return Math.floor(Math.random() * 256)
}