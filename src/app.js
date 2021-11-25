function removeActiveStyle(buttons) {
  buttons.forEach((button) => {
    button.classList.remove('active');
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