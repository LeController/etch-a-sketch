const container = document.querySelector('#container')
let grid_size;

gridButton = document.querySelector('#grid-size')

gridButton.addEventListener('click', getGrid)

// prompts grid, clears and makes grid, listens for mouseover
function getGrid() {
    do {
        grid_size = Math.floor(prompt("What's the grid size? (LESS THAN 100)"));
    } while (grid_size > 100);

    removeAllChildNodes(container);

    for (let i = 1; i <= grid_size*grid_size ; i++) {
        const div =  document.createElement('div')
        div.classList.add("square")
        div.classList.add(`${i}`)  
        container.setAttribute('style', `grid-template-columns: repeat(${grid_size}, 1fr);`)   
        container.appendChild(div);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        // square.classList.add('on');
        square.setAttribute('style', `background-color: rgb(${r},${g},${b});`)
    });
});
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



