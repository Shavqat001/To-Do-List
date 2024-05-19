import { saveData } from "./save.js";

let formEl = document.querySelector('.form'),
    field = document.querySelector('.form__field'),
    formButton = document.querySelector('.form__button');

let currentEditingElement = null;

formEl.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (formButton.textContent === 'add') {
        create();
    } else if (formButton.textContent === 'ok') {
        ok(currentEditingElement);
    }
});

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

function create() {
    let text = field.value.trim();

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

        editBtn.addEventListener('click', () => edit(liEl));

        text.addEventListener('click', () => {
            text.classList.toggle('done');
            saveData();
        });

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

    field.addEventListener('input', () => {
        field.style.outlineColor = '#111';
    });
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
})

window.addEventListener('load', () => {
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
            liEl.id = i;
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

            editBtn.addEventListener('click', () => edit(liEl));

            text.addEventListener('click', () => {
                text.classList.toggle('done');
                saveData();
            });

            delBtn.addEventListener('click', () => {
                liEl.remove();
                saveData();
                field.focus();
            });
        }
    }

    field.focus();
});
