import { saveData } from "./save.js";
import { edit } from "./data.js";
import { buildEl, getEl } from "./functions.js";

function read() {
    let arrItems = JSON.parse(localStorage.getItem('items'));
    let arrClasses = JSON.parse(localStorage.getItem('classes'));

    if (arrItems && arrClasses) {
        let listEl = getEl('.todo-list');

        for (let i = 0; i < arrItems.length; i++) {
            let liEl = buildEl(listEl, 'li', '', 'todo-list__item'),
                text = buildEl(liEl, 'p', field.value, 'text'),
                div = buildEl(liEl, 'div', '', ''),
                editBtn = buildEl(div, 'button', '', 'edit-btn'),
                delBtn = buildEl(div, 'button', '', 'del-btn');

            text.textContent = arrItems[i];

            if (arrClasses[i]) {
                text.classList.add('done');
            }

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
        }
    }

    field.focus();
}

export { read }