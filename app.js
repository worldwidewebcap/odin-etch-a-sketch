// Function to draw a grid
function drawGrid(size) {

    function brandNew() { drawGrid(DEFAULT) }

    // Select the grid container element
    const GRID_CONTAINER = document.querySelector("#grid-container");

    // Select the submit button
    const SUBMIT = document.querySelector('#submit-btn')

    // When clicked, reload the grid with new size
    SUBMIT.addEventListener('click', () => {
        const MAX = 100;
        const MIN = 2
        const text = document.querySelector('.text')
        let inputField = document.querySelector('#grid-size')
        let inputValue = inputField.value
        if (inputValue > MAX || inputValue < MIN) {
            alert(`Max Size: 100\nMin Size: 2`)
            location.reload()
        } else {
            GRID_CONTAINER.innerHTML = ''
            drawGrid(inputValue)
        }
    })

    // Set the size of the grid
    GRID_CONTAINER.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    GRID_CONTAINER.style.gridTemplateColumns = `repeat(${size}, 1fr)`;


    // Loop through the cells
    for (let i = 0; i < size * size; i++) {
        // Create a cell element
        const cell = document.createElement("div");
        // Add a class to the cell element for styling
        cell.className = "cell";
        // On hover, change a cell's background color
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'white';
        })

        // Append the cell element to the grid container element
        GRID_CONTAINER.appendChild(cell);
    }

    // Select the reset button
    const RESET = document.querySelector('#reset-btn')

    // When clicked, reset the to default settings
    RESET.addEventListener('click', () => {
        GRID_CONTAINER.innerHTML = ''
        drawGrid(DEFAULT)
    })
}

// Set the default grid size
const DEFAULT = 20;
// Draw the grid
drawGrid(DEFAULT);

