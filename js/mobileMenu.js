"use strict";
const mobileMenu = document.querySelector('.mobile-menu');
const buttonHeaderOpen = document.querySelector('.header__button-open');
const buttonHeaderClose = document.querySelector('.header__button-close');
const mobileMenuOpen = document.querySelector('.mobile-menu-open');
const openAndCloseMobileMen = () => {
    if (buttonHeaderOpen && mobileMenu && buttonHeaderClose) {
        buttonHeaderOpen.addEventListener('click', () => {
            mobileMenu.classList.add('mobile-menu-open');
            buttonHeaderOpen.classList.add('inactive');
            buttonHeaderClose.classList.remove('inactive');
        });
    }
    if (buttonHeaderClose && mobileMenu && buttonHeaderOpen) {
        buttonHeaderClose.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu-open');
            buttonHeaderClose.classList.add('inactive');
            buttonHeaderOpen.classList.remove('inactive');
        });
    }
};
openAndCloseMobileMen();
