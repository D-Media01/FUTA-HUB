const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle menu on button click
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents this click from immediately triggering the "click outside" logic
  navLinks.classList.toggle('show');
});

// Close menu when clicking anywhere else
window.addEventListener('click', (e) => {
  // If the click is outside the navLinks AND outside the toggle button
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('show');
  }
});
