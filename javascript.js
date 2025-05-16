const div = document.createElement("div");
div.setAttribute("class", "square");

const container = document.querySelector("#container");
container.addEventListener("mouseover", (e) => makeTrail(e.target));

makeGrid(16);




function makeGrid(sideLength) {
    for (let i = 0; i < sideLength * sideLength; i++) {
        const square = div.cloneNode();
        square.style.flex = `1 0 ${1/sideLength * 100}%`
        container.appendChild(square);
    }
}

function makeTrail(target) {
    if (target.id === "container") return;
    target.style.backgroundColor = "black";
} 