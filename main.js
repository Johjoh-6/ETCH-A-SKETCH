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
    document.getElementById('container').style.gridTemplateRows = `repeat(${size}, 1fr)`;
    document.getElementById('container').style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (i = 0; i < gridSize; i++) {
        const gridElement = document.createElement('div');
        container.appendChild(gridElement);
        gridElement.addEventListener('mouseover', setColor);
        gridElement.classList = "grid-element";
    }
}
// get a random color between white until black
function setColor(a) {
    // this const set a number between 50 - 150
    const randomColor = Math.floor(Math.random() * 100 + 50); 
    a.target.style.backgroundColor = `rgb(${randomColor}, ${randomColor}, ${randomColor})`;
}
// Create a button for clear grid
function clearGridButton() {
    const buttonClear = document.createElement('button');
    buttonClear.id = 'clear-button';
    buttonClear.textContent = 'clear';
    container.insertAdjacentElement('beforebegin', buttonClear);
    buttonClear.addEventListener('click', setSize);
    
}
function clearGrid() {
    container.querySelectorAll('.grid-element').forEach(elem => elem.remove())
    }

// Create a input area for select the size of the grid
function setSize() {
    let size = parseInt(prompt('Select the size of the grid'));
    if ( size < 1 || size > 64 || Number.isNaN(size)) {
        alert("Enter a number betwenn 1 and 64");
        setSize();
    } else {
        clearGrid();
        getSizeGrid(size); 
}
}