const showtime = document.querySelector('.showTime');

window.onload = function() {
    const date = new Date();
    showtime.textContent = date;
    console.log(showtime.textContent = date);
};
