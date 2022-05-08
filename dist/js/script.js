//Hamburger
const calvin = document.querySelector('#calvin');
const navMenu = document.querySelector('#nav-menu');

calvin.addEventListener('click', function () {
  calvin.classList.toggle('calvin-active');
  navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};
