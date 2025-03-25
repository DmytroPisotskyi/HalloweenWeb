

const mobileMenu = document.querySelector('.mobile-menu');
const buttonHeaderOpen = document.querySelector('.header__button-open');
const buttonHeaderClose = document.querySelector('.header__button-close');
//const mobileMenuClose = document.querySelector('.mobile-menu__close');
const mobileMenuOpen = document.querySelector('.mobile-menu-open');

/*function openMobileMenu() {
    mobileMenu.classList.add('mobile-menu-open');
    console.log(mobileMenu)
}

function closeMobileMenu() {
    mobileMenu.classList.remove('mobile-menu-open');
}





buttonHeader.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
*/

const openAndCloseMobileMen = () => {
    buttonHeaderOpen.addEventListener('click', ()=> {
        mobileMenu.classList.add('mobile-menu-open')
        buttonHeaderOpen.classList.add('inactive')
        buttonHeaderClose.classList.remove('inactive')
    })
    buttonHeaderClose.addEventListener('click', ()=> {
        mobileMenu.classList.remove('mobile-menu-open')
        buttonHeaderClose.classList.add('inactive')
        buttonHeaderOpen.classList.remove('inactive');
    })
}


openAndCloseMobileMen()
