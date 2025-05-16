const div = document.createElement("div");
div.setAttribute("class", "square");

const container = document.querySelector("#container");
container.addEventListener("mouseover", (e) => makeTrail(e.target));

const erase = document.querySelector("#prompt");
erase.addEventListener("click", promptErase)

makeGrid(16);


function makeGrid(sideLength) {
    container.textContent = '';
    for (let i = 0; i < sideLength ** 2; i++) {
        const square = div.cloneNode();
        square.style.flex = `1 0 ${1/sideLength * 100}%`
        container.appendChild(square);
    }
}

function makeTrail(target) {
    if (target.id === "container") return;
    target.style.backgroundColor = "black";
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