window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    if ( window.scrollY > 10 ) {
        header.classList.add('scroll');
        footer.classList.add('active-footer');
    } else {
        header.classList.remove('scroll');
        footer.classList.remove('active-footer');
    }
});

