//Variable
const container = document.createElement('div');
document.body.appendChild(container);
container.id = 'container';




// Set the size when you load the page
getSizeGrid(16);

function getSizeGrid(size) {
    let gridSize = size * size;
    document.getElementById('container').style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    document.getElementById('container').style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 1; i <= gridSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList = "grid-element";
        container.appendChild(gridElement);
        console.log(gridSize);
        gridElement.addEventListener('mouseover', setColor);
    }
}
function setColor(a) {
    a.target.style.backgroundColor = 'black';
}