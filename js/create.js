import { saveData } from "./save.js";
import { edit } from "./data.js";
import { buildEl, getEl } from "./functions.js";

function create() {
    if (!field.value) {
        field.style.outlineColor = 'tomato';
        field.focus();
        return;
    }
    let title = document.querySelector('.title');
    let listEl = getEl('.todo-list'),

        liEl = buildEl(listEl, 'li', '', 'todo-list__item'),
        text = buildEl(liEl, 'p', field.value, 'text'),
        div = buildEl(liEl, 'div', '', ''),
        editBtn = buildEl(div, 'button', '', 'edit-btn'),
        delBtn = buildEl(div, 'button', '', 'del-btn');

    editBtn.addEventListener('click', () => edit(liEl));

    text.addEventListener('click', () => {
        text.classList.toggle('done');
        saveData();
    });

    delBtn.addEventListener('click', () => {
        liEl.remove();
        saveData();
        field.focus();
        field.style.outlineColor = '#111';
        title.style.display = 'none';
    });

    field.style.outlineColor = '#111';
    field.value = '';
    field.focus();
    saveData();
}

export { create };
