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
const squares = document.querySelectorAll('.square');
squares.forEach((square)=>{
    square.addEventListener("mouseover", () => {
        square.classList.add('hover-state');
    });
})
// button section
const button = document.querySelector('button');

button.addEventListener('click',()=> {
    // remove previous grid
    container.replaceChildren();

    //variables
    const num_of_squares = Number (prompt('Enter number of squares per side for the new grid'));
    const size_of_square = 960/num_of_squares;

    // check if num is < or > than 100
    if (num_of_squares > 100 || num_of_squares < 1) return;

    //create squares
    for (let i = 0; i < num_of_squares*num_of_squares; i++){
    
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    // update size of square to css
    square.style.width = `${size_of_square}px`;
    square.style.height = `${size_of_square}px`;
}
    // hover
    const squares = document.querySelectorAll('.square');
    squares.forEach((square)=>{
    square.addEventListener("mouseover", () => {
        square.classList.add('hover-state');
    });
});
});