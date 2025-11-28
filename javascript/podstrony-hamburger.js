const hamburger  = document.querySelector('.hamburger');
const mobileNav  = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-active');
    mobileNav.classList.toggle('open', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}
