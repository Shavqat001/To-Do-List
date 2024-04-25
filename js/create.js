import { saveData } from "./save.js";
import { isEdit } from "./data.js";
import { update } from "./update.js";

function create() {
    if (field.value) {
        let liEl = document.createElement('li'),
            text = document.createElement('p'),
            div = document.createElement('div'),
            editBtn = document.createElement('button'),
            delBtn = document.createElement('button'),
            listEl = document.querySelector('.todo-list');

        liEl.classList.add('todo-list__item');
        text.textContent = field.value;
        text.classList.add('text');
        editBtn.classList.add('edit-btn');
        delBtn.classList.add('del-btn');

        div.append(editBtn);
        div.append(delBtn);
        liEl.prepend(text);
        liEl.append(div);
        listEl.append(liEl);

        text.addEventListener('click', () => {
            text.classList.toggle('done');
            saveData();
        });

        editBtn.addEventListener('click', update);

        delBtn.addEventListener('click', () => {
            liEl.remove();
            saveData();
            field.focus();
        });
    } else {
        field.style.outlineColor = 'tomato';
    }
    field.focus();
    field.value = '';
    saveData();
}

field.addEventListener('input', () => {
    field.style.outlineColor = '#111';
});

export { create, isEdit }