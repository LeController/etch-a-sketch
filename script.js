const container = document.querySelector('#container')

for (let i = 1; i <= 16*16 ; i++) {
    const div =  document.createElement('div')
    div.classList.add("square")
    div.classList.add(`${i}`)     
    container.appendChild(div);
}
