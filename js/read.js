import { saveData } from "./save.js";
import { isEdit } from "./data.js";
import { update } from "./update.js";

function read() {
    let arrItems = JSON.parse(localStorage.getItem('items'));
    let arrClasses = JSON.parse(localStorage.getItem('classes'));

    if (arrItems && arrClasses) {
        for (let i = 0; i < arrItems.length; i++) {
            let liEl = document.createElement('li'),
                text = document.createElement('p'),
                div = document.createElement('div'),
                editBtn = document.createElement('button'),
                delBtn = document.createElement('button'),
                listEl = document.querySelector('.todo-list');

            liEl.classList.add('todo-list__item');
            text.textContent = arrItems[i];
            if (arrClasses[i]) {
                text.classList.add('done');
            }
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
        }
    }
}

export { read, isEdit }
