function addLiToUl() {
    if (field.value) {
        let liEl = document.createElement('li'),
            text = document.createElement('span'),
            div = document.createElement('div'),
            editBtn = document.createElement('button'),
            delBtn = document.createElement('button');

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

        editBtn.addEventListener('click', () => {
            let okBtns = document.querySelectorAll('.ok-btn');
            okBtns.forEach(el => {
                el.remove();
            });

            if (div.children.length !== 3) {
                let okBtn = document.createElement('button');
                okBtn.textContent = 'ok';
                okBtn.classList.add('ok-btn');
                div.append(okBtn);

                field.value = text.textContent;

                okBtn.addEventListener('click', () => {
                    text.textContent = field.value;
                    okBtn.remove();
                    field.value = '';
                    field.focus();
                    saveData();
                });
            }
            field.focus();
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
    drag();
}

field.addEventListener('input', () => {
    field.style.outlineColor = '#111';
});
