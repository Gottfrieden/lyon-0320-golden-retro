function burgerMenu() {

const burgerMenuOpen = document.getElementById('burger-menu-open');
const navMobileContainer = document.getElementById('nav-mobile-container');
const burgerMenuClose = document.getElementById('burger-menu-close');

burgerMenuOpen.classList.toggle('no-content');
burgerMenuClose.classList.toggle('no-content');
navMobileContainer.classList.toggle('no-content');
}
