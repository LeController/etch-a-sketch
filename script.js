const container = document.querySelector('#container')

let grid_size;

do {
    grid_size = prompt("What's the grid size?");
    console.log(grid_size)
} while (grid_size > 100);


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


