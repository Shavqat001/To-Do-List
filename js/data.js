import { saveData } from "./save.js";
import { create } from "./create.js";
import { read } from "./read.js";
import { getEl } from "./functions.js";

let formEl = getEl('.form'),
    field = getEl('.form__field'),
    formButton = getEl('.form__button'),
    currentEditingElement = null;

formEl.addEventListener('submit', (evt) => {
    evt.preventDefault();
    formButton.textContent === 'add' ? create() : ok(currentEditingElement);
    showTitle();
});

window.addEventListener('load', () => {
    read();
    showTitle();
});

function showTitle() {
    let title = document.querySelector('.title'),
        items = document.querySelectorAll('.todo-list__item');

    items.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            title.style.left = `${e.pageX + 15}px`;
            title.style.top = `${e.pageY + 20}px`;
            title.textContent = item.querySelector('.text').textContent;
            title.style.display = 'inline';
        });
        item.addEventListener('mouseout', () => title.style.display = 'none');
    });
}

function ok(el) {
    el.querySelector('p').textContent = field.value.trim();
    formButton.textContent = 'add';
    field.value = '';
    currentEditingElement = null;
    field.focus();
    saveData();
}

function edit(el) {
    formButton.textContent = 'ok';
    field.value = el.querySelector('p').textContent;
    field.focus();
    currentEditingElement = el;
}

export { edit, showTitle }
