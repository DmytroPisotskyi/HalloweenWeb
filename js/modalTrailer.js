
/*openTrailer, closeTrailer and fixed modal*/
const modal = document.querySelector('.modal');
const clickTrailer = document.querySelector('.link-trailer');
const closeModal = document.querySelector('.close-modal');


function openTrailer() {
    modal.classList.add('active-modal');
    document.body.appendChild(modal)

    
    localStorage.setItem('openTrailer', 'true')
}

function closeTrailer() {
    modal.classList.remove('active-modal');

    document.body.removeChild(modal)

   
    localStorage.setItem('openTrailer', 'false')
}

window.onload = function() {
    const isModalOpen = localStorage.getItem('openTrailer');
    if (isModalOpen === 'true') {
        openTrailer();
    }
};

clickTrailer.addEventListener('click', openTrailer);
closeModal.addEventListener('click', closeTrailer);








