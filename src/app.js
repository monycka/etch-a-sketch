function removeActiveStyle(buttons) {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
}

function chooseGrid() {
  const gridButtons = document.querySelectorAll('.grid-btn');
  const colorButtons = document.querySelectorAll('.rectangle');
  const gridButtons = document.querySelectorAll('.circle');
  gridButtons.forEach((button) => {
    button.addEventListener('click', () => {
      removeActiveStyle(colorButtons);
      removeActiveStyle(gridButtons);
      if (button.classList.contains('grid-10')) {
        gridButtons[0].classList.add('active-btn');
        gridButtons[1].classList.remove('active-btn');
        gridButtons[2].classList.remove('active-btn');
        gridButtons[0].classList.add('active');
        generateGrid(10 * 10, 'grid-10x10');
      } else if (button.classList.contains('grid-20')) {
        gridButtons[0].classList.remove('active-btn');
        gridButtons[1].classList.add('active-btn');
        gridButtons[2].classList.remove('active-btn');
        gridButtons[1].classList.add('active');
        generateGrid();
      } else if (button.classList.contains('grid-30')) {
        gridButtons[0].classList.remove('active-btn');
        gridButtons[1].classList.remove('active-btn');
        gridButtons[2].classList.add('active-btn');
        gridButtons[2].classList.add('active');
        generateGrid(30 * 30, 'grid-30x30');
      }
    });
  });
}

function generateColor(name, colors) {
  const gridItem = document.querySelectorAll('.grid-container > div');
  gridItem.forEach((item) => {
    if (name === 'warm' || name === 'cold') {
      const randomColors = colors[Math.floor(
        Math.random() * colors.length,
      )];
      item.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = randomColors;
      });
    } else if (name === 'black' || name === 'white') {
      item.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = colors;
      });
    }
  });
}