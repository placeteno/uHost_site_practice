const toggle = document.querySelector('.toggle-button');
const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');
const closeMobileNavBtn = document.querySelector('.close-mobile-nav-btn');

function openMobileNav() {
  mobileNav.style.display = 'block';
}

function closeMobileNav() {
  mobileNav.style.display = 'none';
}

toggle.addEventListener('click', openMobileNav);
closeMobileNavBtn.addEventListener('click', closeMobileNav);
