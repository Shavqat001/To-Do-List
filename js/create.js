import { saveData } from "./save.js";
import { edit } from "./data.js";

function create() {
    if (!field.value) {
        field.style.outlineColor = 'tomato';
        return;
    }

    let liEl = document.createElement('li');
    let text = document.createElement('p');
    let div = document.createElement('div');
    let editBtn = document.createElement('button');
    let delBtn = document.createElement('button');
    let listEl = document.querySelector('.todo-list');

    liEl.classList.add('todo-list__item');
    text.textContent = field.value;
    text.classList.add('text');
    editBtn.classList.add('edit-btn');
    delBtn.classList.add('del-btn');

    div.append(editBtn, delBtn);
    liEl.append(text, div);
    listEl.append(liEl);

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
    });

    field.style.outlineColor = '#111';
    field.value = '';
    field.focus();
    saveData();
}

export { create };
