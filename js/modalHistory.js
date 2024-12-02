

// Получаем элементы по id
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const clickTrailer1 = document.getElementById('btn-video1');
const clickTrailer2 = document.getElementById('btn-video2');
const closeModal1 = document.getElementById('close-modal1');
const closeModal2 = document.getElementById('close-modal2');

// Функция для открытия модального окна 1
function openModal1() {
    modal1.classList.add('active-modal');
    localStorage.setItem('openModal1', 'true');
    modal2.classList.remove('active-modal');  // Закрыть modal2, если оно было открыто
}

// Функция для открытия модального окна 2
function openModal2() {
    modal2.classList.add('active-modal');
    localStorage.setItem('openModal2', 'true');
    modal1.classList.remove('active-modal');  // Закрыть modal1, если оно было открыто
}

// Функция для закрытия модального окна 1
function closeModal1Fn() {
    modal1.classList.remove('active-modal');
    localStorage.setItem('openModal1', 'false');
}

// Функция для закрытия модального окна 2
function closeModal2Fn() {
    modal2.classList.remove('active-modal');
    localStorage.setItem('openModal2', 'false');
}

// Проверка состояния модальных окон при загрузке страницы
window.onload = function() {
    const isModalOpen1 = localStorage.getItem('openModal1');
    const isModalOpen2 = localStorage.getItem('openModal2');
    
    // Если нужно, открываем соответствующие модальные окна
    if (isModalOpen1 === 'true') {
        openModal1();
    }

    if (isModalOpen2 === 'true') {
        openModal2();
    }
};

// Назначаем обработчики для кнопок открытия модальных окон
clickTrailer1.addEventListener('click', openModal1);
clickTrailer2.addEventListener('click', openModal2);

// Назначаем обработчики для кнопок закрытия модальных окон
closeModal1.addEventListener('click', closeModal1Fn);
closeModal2.addEventListener('click', closeModal2Fn);