// Function to draw a grid
function drawGrid(rows, cols) {
    
    // Get the grid container element
    const GRID_CONTAINER = document.querySelector('#grid-container')

    // Clear the grid container
    GRID_CONTAINER.innerHTML = ''

    // Loop through the cells
    for (let i = 0; i < rows * cols; i++) {
        // Create a cell element
        const cell = document.createElement('div')
        // Add a class to the cell
        cell.className = 'cell'
        // Set the cell's id
        cell.setAttribute('id', `${i}`)
        // Append the cell to the grid container
        GRID_CONTAINER.appendChild(cell)
    }
}

drawGrid(100,100)