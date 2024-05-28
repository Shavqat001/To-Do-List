import { saveData } from "./save.js";
import { create } from "./create.js";
import { read } from "./read.js";
import { getEl } from "./functions.js";

let formEl = getEl('.form'),
    field = getEl('.form__field'),
    formButton = getEl('.form__button');

let currentEditingElement = null;

formEl.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (formButton.textContent === 'add') {
        create();
        showTitle();
    } else if (formButton.textContent === 'ok') {
        ok(currentEditingElement);
    }
});

window.addEventListener('load', () => {
    read();
    showTitle();
});

function showTitle() {
    let title = document.querySelector('.title');
    let items = document.querySelectorAll('.todo-list__item');

    for (const item of items) {
        item.addEventListener('mousemove', (e) => {
            title.style.left = `${e.pageX + 15}px`;
            title.style.top = `${e.pageY + 20}px`;
            title.textContent = item.querySelector('.text').textContent
            title.style.display = 'block';
        });

        item.addEventListener('mouseout', (e) => {
            title.style.display = 'none';
        });
    }
}

function ok(el) {
    let text = field.value.trim();
    el.querySelector('p').textContent = text;
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