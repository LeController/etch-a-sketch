const container = document.querySelector('#container')

for (let i = 1; i <= 16 ; i++) {
    const div =  document.createElement('div')
    div.classList.add("column")

    container.appendChild(div);

    for (let j = 1; j <= 16; j++) {
        const div2 =  document.createElement('div')
        div2.classList.add("square")
        div2.classList.add(`${i}.${j}`)
        // div2.textContent = `${i}.${j}`
        div.appendChild(div2);
    }
}