const container = document.querySelector('.container');

function generateGrid(num) {
  squared = num ** 2;
  for (let i = 0; i < squared; i++) {
    const box = document.createElement('div');
    box.classList.toggle('box');
    box.style.width = (720 / num).toString() + 'px';
    box.style.height = (720 / num).toString() + 'px';
    box.style.opacity = 0;
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
    container.removeChild(box);
  });
  let answer = prompt('Enter a number between 2-100: ');
  generateGrid(answer);
  addHover();
});

rainbowBtn.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    const randomColor = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'indigo',
      'violet',
    ];
    box.style.backgroundColor =
      randomColor[Math.floor(Math.random() * randomColor.length)];
    box.style.opacity = 0;
  });
});
