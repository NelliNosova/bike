const header = document.querySelector('.js-header');
const mainNav = document.querySelector('.js__main-nav');
const menuBtn = mainNav.querySelector('.js__menu-toggle');
const menuItems = mainNav.querySelectorAll('.js__menu-item');

const toggleMenu = () => {
  const closeMenu = () => {
    header.style.position = 'absolute';
    mainNav.classList.remove('main-nav--open');
    mainNav.classList.add('main-nav--close');
  };

  const openMenu = () => {
    mainNav.classList.remove('main-nav--close');
    mainNav.classList.add('main-nav--open');
  };

  const openCloseMenu = () => {
    if (mainNav.classList.contains('main-nav--close')) {
      openMenu();
    } else if (mainNav.classList.contains('main-nav--open')) {
      closeMenu();
    }
  };

  closeMenu();
  menuBtn.addEventListener('click', openCloseMenu);

  menuItems.forEach((item) => {
    item.addEventListener('click', openCloseMenu);
  });
};

export {toggleMenu};
