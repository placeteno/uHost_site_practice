function scrollHeader() {
  const header = document.getElementById('header');
  console.log(header);
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (scrollY >= 25) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);
