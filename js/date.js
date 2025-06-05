"use strict";
const addDate = () => {
    const dateTime = document.querySelector('.date-time');
    const date = new Date().getFullYear().toString();
    if (dateTime instanceof HTMLElement) {
        dateTime.innerHTML = date;
    }
};
addDate();
