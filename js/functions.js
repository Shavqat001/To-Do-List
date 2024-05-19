function buildEl(parent, element, text, className) {
    const el = document.createElement(element);
    text ? el.textContent = text : '';
    className ? el.classList.add(className) : '';

    if (parent instanceof HTMLElement) {
        parent.append(el);
    }

    return el;
}

function getEl(el) {
    let element = document.querySelector(el);
    if (element instanceof HTMLElement) {
        return element;
    }
}

export { buildEl, getEl }