// Function to draw a grid
function drawGrid(size) {
    // Get the grid container element
    const GRID_CONTAINER = document.querySelector("#grid-container");

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
    RESET.addEventListener('click', () => {
        GRID_CONTAINER.innerHTML = ''
        drawGrid(50, 50)
    })
}

drawGrid(50, 50);
