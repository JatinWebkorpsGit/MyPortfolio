// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Welcome alert
window.addEventListener('load', () => {
  alert('Welcome to my portfolio website!');
});

// Hover animation for project cards
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.03)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
