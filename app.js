// an event handler that changes the body from day and night

var body = document.querySelector('body');
var btn = document.querySelector('.day-night-btn');


btn.addEventListener('click', () => {
    if (body.className === 'day') {
        body.classList.remove('day');
        body.classList.add('night');
        btn.style.color = 'white';
    } else if (body.className === 'night') {
        body.classList.remove('night');
        body.classList.add('day');
        btn.style.color = 'black';
    }
})
