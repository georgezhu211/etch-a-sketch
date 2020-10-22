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

function addHover() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.opacity = +box.style.opacity + 0.1;
        });
    });
}
 
function randomColor() {
    const randomColor = MMath.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

generateGrid(4);
addHover();
const newBtn = document.querySelector('.new-btn');
const clearBtn = document.querySelector('.clear-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');

clearBtn.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.opacity = 0;
    });
});

newBtn.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        container.removeChild(box)
    });
    let answer = prompt("Enter a number between 2-100: ");
    generateGrid(answer);
    addHover();
});

rainbowBtn.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        box.style.backgroundColor = randomColor;
        box.style.opacity = 0;
    });
});
