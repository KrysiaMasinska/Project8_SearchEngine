const input = document.querySelector('.header__search');
const li = document.querySelectorAll('li');

const searchEngine = e => {
    const text = e.target.value.toLowerCase();
    li.forEach(i => {
        const dinner = i.textContent;
        if (dinner.toLowerCase().indexOf(text) !== -1) {
            i.style.display = 'block';
        } else {
            i.style.display = 'none';
        }
    })
};

input.addEventListener('keyup', searchEngine);