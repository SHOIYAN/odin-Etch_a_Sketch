'use strict';

//variables
const container = document.querySelector('.container');
// create squares
for (let i = 0; i < 256; i++){
    
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}
// hover squares
const square = document.querySelectorAll('.square');
square.forEach((square)=>{
    square.addEventListener("mouseover", () => {
        square.classList.add('hover-state');
    });
})