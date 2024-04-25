import { createButton, field } from './data.js';
import { update } from './update.js';
import { saveData } from "./save.js";

function ok() {
    createButton.textContent = 'add';
    saveData();
    field.focus();
    field.value = '';
}

export { ok }