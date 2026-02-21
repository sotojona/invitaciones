// src/scripts/scrollAnimation.js
export function initScrollAnimation(selector = '.full-image') {
  const section = document.querySelector(selector);
  if (!section) return;

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function handleScroll() {
    if (isInViewport(section)) {
      section.classList.add('visible');
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}