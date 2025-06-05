"use strict";
/*fixedHeadr*/
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        if (header instanceof HTMLElement) {
            header.classList.add('scroll');
        }
    }
    else {
        if (header instanceof HTMLElement) {
            header.classList.remove('scroll');
        }
    }
});
