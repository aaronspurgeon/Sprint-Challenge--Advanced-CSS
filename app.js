// an event handler that changes the body from day and night

const body = document.querySelector('body');
const btn = document.querySelector('.day-night-btn');
const form = document.querySelector('.sign-up-form');
const formBtn = document.querySelector('.btn');


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

formBtn.addEventListener('click', () => {
    form.style.display = 'block';
})
