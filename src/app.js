function removeActiveStyle(buttons) {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
}