const container = document.querySelector('#container')
let grid_size;

gridButton = document.querySelector('#grid-size')
// gridButton.addEventListener('click', () => {
//     grid_size = prompt("What's the grid size? (LESS THAN 100)");
// })

gridButton.addEventListener('click', getGrid)


function getGrid() {
    do {
        grid_size = prompt("What's the grid size? (LESS THAN 100)");
        console.log(grid_size)
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
        square.classList.add('on');
    });
});
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// const squares = document.querySelectorAll('.square');
// squares.forEach((square) => {
    
//     square.addEventListener('mouseover', () => {
//         square.classList.add('on');
//     });
// });


