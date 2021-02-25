import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const header = document.querySelector('.js-header');
const mainNav = document.querySelector('.js-main-nav');
const menuBtn = mainNav.querySelector('.js-menu-toggle');
const menuItems = mainNav.querySelectorAll('.js__menu-item');

const toggleMenu = () => {
  const closeMenu = () => {
    header.classList.add('header--absolute');
    mainNav.classList.remove('main-nav--open');
    mainNav.classList.add('main-nav--close');
    enableScrolling();
  };

  const openMenu = () => {
    mainNav.classList.remove('main-nav--close');
    mainNav.classList.add('main-nav--open');
    disableScrolling();
  };

  const switchMenu = () => {
    if (mainNav.classList.contains('main-nav--close')) {
      openMenu();
    } else if (mainNav.classList.contains('main-nav--open')) {
      closeMenu();
    }
  };

  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', (evt) => {
      evt.preventDefault();

      const linkID = anchor.getAttribute('href').substr(1);
      const blockID = document.getElementById(linkID);

      blockID.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  closeMenu();
  menuBtn.addEventListener('click', switchMenu);

  menuItems.forEach((item) => {
    item.addEventListener('click', switchMenu);
  });
};

export {toggleMenu};
