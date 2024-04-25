import { isEdit, createButton, field } from "./data.js";

function update(evt) {
    createButton.textContent = 'ok';
    isEdit['edit'] = false;
    if(evt.target) {
        const text = evt.target.parentNode.previousElementSibling.textContent;
        field.value = text;
    }
    field.focus();
    console.log(arguments);
}

export { update }