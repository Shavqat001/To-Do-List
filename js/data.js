let formEL = document.querySelector('.form-el'),
    field = document.querySelector('.form-el__field'),
    label = document.querySelector('.form-el__label'),
    listEl = document.querySelector('.todo-list'),
    addBtn = document.querySelector('.form-el__add-button');

formEL.addEventListener('submit', (evt) => {
    evt.preventDefault();
});

addBtn.addEventListener('click', () => {
    addLiToUl();
});

window.addEventListener('load', () => {
    loadData();
    field.focus();
});