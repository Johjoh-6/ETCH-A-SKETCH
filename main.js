//Variable
const container = document.createElement('div');
document.body.appendChild(container);
container.id = 'container';
const title = document.createElement('h1');
document.body.insertAdjacentElement('afterbegin', title);
title.textContent = 'ETCH A SKETCH';

// Start
getSizeGrid(16);
clearGridButton();

// set a grid size
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
// get a random color between white until black
function setColor(a) {
    const randomColor = Math.floor(Math.random() * 256);
    a.target.style.backgroundColor = `rgb(${randomColor}, ${randomColor}, ${randomColor})`;
}
// Create a button for clear
function clearGridButton() {
    const buttonClear = document.createElement('button');
    buttonClear.id = 'clear-button';
    buttonClear.textContent = 'clear';
    container.insertAdjacentElement('beforebegin', buttonClear);
    buttonClear.addEventListener('click', clearGrid); 
}
function clearGrid() {
    //    need a clear function
    }