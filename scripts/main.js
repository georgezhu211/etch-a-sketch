const container = document.querySelector('.container');

function generateGrid(num) {
    squared = num ** 2
    for(let i = 0 ; i < squared; i++) {
        const box = document.createElement('div');
        box.classList.toggle('box');
        box.style.width = (720/num).toString() + "px";
        box.style.height = (720/num).toString() + "px";
        container.appendChild(box);
    }
}

generateGrid(20);

const boxes = document.querySelectorAll('.box');
const newBtn = document.querySelector('.new-btn');
const clearBtn = document.querySelector('.clear-btn');

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.opacity = 1;
    });
});