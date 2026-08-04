/* Small, accessible mobile-navigation enhancement. */
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-navigation');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('is-open', !open);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}));
