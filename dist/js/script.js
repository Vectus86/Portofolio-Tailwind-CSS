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
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// klik diluar hamburger
window.addEventListener('click', function (e) {
  if (e.target != calvin && e.target != navMenu) {
    calvin.classList.remove('calvin-active');
    navMenu.classList.add('hidden');
  }
});

// Dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindah Posisi Toggle Sesuai Mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
