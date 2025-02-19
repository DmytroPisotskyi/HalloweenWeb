

/*openTrailer, closeTrailer and fixed modal*/
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const clickTrailer1 = document.querySelector('.monster-btn');
const clickTrailer2 = document.querySelector('.halloween-btn');
const closeModal1 = document.getElementById('close-modal1');
const closeModal2 = document.getElementById('close-modal2');


console.log(clickTrailer1);




clickTrailer1.addEventListener('click',()=> {
    modal1.classList.add('active-modal')
    document.body.appendChild(modal1)
    localStorage.setItem('openTrailer', 'true')
})

clickTrailer2.addEventListener('click',()=> {
    modal2.classList.add('active-modal')
    document.body.appendChild(modal2)
    localStorage.setItem('openTrailer', 'true')
})


closeModal1.addEventListener('click', ()=> {
    modal1.classList.remove('active-modal');
    document.body.removeChild(modal1)

    localStorage.setItem('openTrailer', 'false')
})

closeModal2.addEventListener('click', ()=> {
    modal2.classList.remove('active-modal');
    document.body.removeChild(modal2)

    localStorage.setItem('openTrailer', 'false')
})



window.onload = function() {
    const isModalOpen = localStorage.getItem('openTrailer');
    if (isModalOpen === 'true') {
        openTrailer();
    }
};

