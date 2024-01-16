// Function to draw a grid
function drawGrid(size) {

    // Select the grid container element
    const GRID_CONTAINER = document.querySelector("#grid-container");

    // Select the submit button
    const SUBMIT = document.querySelector('#submit-btn')

    // When clicked, reload the grid with new size
    SUBMIT.addEventListener('click', () => {

        let inputValue = document.querySelector('#grid-size').value
        if (inputValue > 100 || inputValue < 2) {
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
        // On hover, if ctrl is held, change a cell's background color
        cell.addEventListener('mouseover', (e) => {
            if (e.ctrlKey) {
                const mouseOver = new Event('mouseover');
                cell.dispatchEvent(mouseOver)
                cell.style.backgroundColor = '#ccc';
            }
            // If the mouse is clicked, also change the cell's background color
            cell.addEventListener('click', () => {
                cell.style.backgroundColor = '#ccc';
            })
        })

        // If user is on mobile and touches cell, change cell's background color
        cell.addEventListener('touchstart', () => {
            cell.style.backgroundColor = '#ccc';
        })

        // Append the cell element to the grid container element
        GRID_CONTAINER.appendChild(cell);
    }

    // Function to reset the grid
    function slideReset() {
        if (SLIDER.value != 100) {
            return
        }
        GRID_CONTAINER.innerHTML = '';
        drawGrid(DEFAULT)
        SLIDER.value = 0;

    };
    // Select the range slider
    const SLIDER = document.querySelector('.slider');
    // If the slider is moved to the end, reset the grid
    SLIDER.onchange = function () {
        slideReset();
    };

}


// Set the default grid size
const DEFAULT = 20;
// Draw the grid
drawGrid(DEFAULT);

