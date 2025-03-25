
const addDate = () => {
    const dateTime = document.querySelector('.date-time');
    const date = new Date().getFullYear().toString()

    console.log(date);
    dateTime.innerHTML = date
}

addDate()