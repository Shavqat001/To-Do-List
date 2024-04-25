import { read } from "./read.js";
import { create } from "./create.js";
import { ok } from "./ok.js";

let formEL = document.querySelector('.form-el'),
    field = document.querySelector('.form-el__field'),
    createButton = document.querySelector('.form-el__add-button');

const isEdit = { edit: true };

formEL.addEventListener('submit', (evt) => {
    evt.preventDefault();
});

createButton.addEventListener('click', () => {
    isEdit['edit'] ? create() : ok();
});

window.addEventListener('load', () => {
    read();
    field.focus();
});

export { createButton, isEdit, field };
