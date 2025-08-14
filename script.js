// script.js

// === MOBILE MENU TOGGLE ===
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  menuOpen.classList.toggle('hidden', !isOpen);
  menuClose.classList.toggle('hidden', isOpen);
});

// === PRODUCT FILTERING ===
const filterButtons = document.querySelectorAll('.filterBtn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    filterButtons.forEach((btn) =>
      btn.classList.remove('bg-rose-300', 'text-white')
    );
    button.classList.add('bg-rose-300', 'text-white');

    productCards.forEach((card) => {
      const category = card.getAttribute('data-category');
      card.classList.toggle(
        'hidden',
        filterValue !== 'all' && category !== filterValue
      );
    });
  });
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// === AOS SCROLL ANIMATIONS ===
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000, // Animation speed
    offset: 80, // Start animation earlier
    once: false, // Animate every time it scrolls into view
    mirror: true, // Animate out when scrolling past
  });
});
