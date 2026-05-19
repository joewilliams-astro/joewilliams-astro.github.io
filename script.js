const cards = document.querySelectorAll('.card');
const overlay = document.querySelector('.overlay');

let activeClone = null;

cards.forEach(card => {
  card.addEventListener('click', () => {

    // Remove existing clone
    if (activeClone) {
      activeClone.remove();
      activeClone = null;
    }

    // Clone the clicked card
    const clone = card.cloneNode(true);
    clone.classList.add('focused-card');

    document.body.appendChild(clone);
    overlay.classList.add('active');

    activeClone = clone;

    // Click clone to close
    clone.addEventListener('click', closeFocus);
  });
});

// Click overlay to close
overlay.addEventListener('click', closeFocus);

function closeFocus() {
  if (activeClone) {
    activeClone.remove();
    activeClone = null;
  }
  overlay.classList.remove('active');
}