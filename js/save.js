function saveData() {
    let arrItems = [];
    let arrDone = [];

    let items = document.querySelectorAll('.todo-list__item');
    let text = document.querySelectorAll('span');

    for (let i = 0; i < items.length; i++) {
        arrItems.push(items[i].textContent);
    }

    text.forEach(el => {
        arrDone.push(el.classList.contains('done'));
    });

    localStorage.setItem('items', JSON.stringify(arrItems));
    localStorage.setItem('classes', JSON.stringify(arrDone));
}

export { saveData }