const toggleBtn = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('hidden');
});