const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle('open')
};

// Use the e.propertyName to discover which transtitions are ending.
function toggleActive(e) {
    //   console.log(e.propertyName);
  // Use .includes(flex) to cover browsers with bugs that use flex-grow.
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
};

// forEach will loop over the panels, and use the eventListener for each one.
// Calling toggleOpen ensures that when the panel is clicked, the toggleOpen function will run
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
