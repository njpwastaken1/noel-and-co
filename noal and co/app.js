function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal('.top-reveal', { delay: 200, origin: 'top' });
sr.reveal('.left-reveal', { delay: 200, origin: 'left' });
sr.reveal('.right-reveal', { delay: 200, origin: 'right' });
sr.reveal('.bottom-reveal', { delay: 200, origin: 'bottom' });
