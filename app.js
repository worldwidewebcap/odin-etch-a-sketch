
// Function to draw a grid
function drawGrid(rows, cols) {

    // Get the grid container element
    const GRID_CONTAINER = document.querySelector('#grid-container')

    // Clear the grid container
    GRID_CONTAINER.innerHTML = ''

    // Loop through the cells
    for (let i = 0; i <= rows * cols; i++) {
        // Create a cell element
        const cell = document.createElement('div')
        // Add a class to the cell element
        cell.className = 'cell'
        // Set the cell element's id
        cell.setAttribute('id', `${i}`)


        // Append the cell element to the grid container element
        GRID_CONTAINER.appendChild(cell)
    }
}



drawGrid(100, 100)