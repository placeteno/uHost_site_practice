const toggle = document.querySelector('.toggle-button');
const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');
const closeMobileNavBtn = document.querySelector('.close-mobile-nav-btn');

function openMobileNav() {
  mobileNav.classList.add('mobile-nav-trans');
}

function closeMobileNav() {
  mobileNav.classList.remove('mobile-nav-trans');
}

toggle.addEventListener('click', openMobileNav);
closeMobileNavBtn.addEventListener('click', closeMobileNav);
