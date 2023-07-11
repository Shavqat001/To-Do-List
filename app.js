let formEL = document.querySelector('form'),
   field = document.querySelector('.field'),
   listEl = document.querySelector('.list'),
   addBtn = document.querySelector('.add-btn');

formEL.addEventListener('submit', (evt) => {
   evt.preventDefault();
})

addBtn.addEventListener('click', () => {
   addLiToUl();
})

window.addEventListener('load', () => {
   field.focus();
   field.placeholder = 'write something . . .';
   loadData();
});

function addLiToUl() {
   if (field.value) {
      field.style.outlineColor = '#111';

      let liEl = document.createElement('li');
      liEl.classList.add('item');
      listEl.append(liEl);

      let text = document.createElement('span');
      text.textContent = field.value;
      liEl.prepend(text);

      text.addEventListener('click', () => {
         text.classList.toggle('done');
         saveData();
      });

      let div = document.createElement('div');
      liEl.append(div);

      let editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      div.append(editBtn);

      editBtn.addEventListener('click', () => {
         saveData();
      });

      let delBtn = document.createElement('button');
      delBtn.classList.add('del-btn');
      div.append(delBtn);

      delBtn.addEventListener('click', () => {
         liEl.remove();
         saveData();
      });
   } else {
      field.style.outlineColor = 'tomato';
   }
   field.focus();
   field.value = '';
   saveData();
}

function saveData() {
   let arrItems = [];

   let items = document.querySelectorAll('.item');
   for (let i = 0; i < items.length; i++) {
      arrItems.push(items[i].textContent);
   }

   localStorage.setItem('items', JSON.stringify(arrItems));
}

function loadData() {
   let arrItems = JSON.parse(localStorage.getItem('items'));
   if (arrItems) {
      for (let i = 0; i < arrItems.length; i++) {
         let liEl = document.createElement('li');
         liEl.textContent = arrItems[i];
         liEl.classList.add('item');
         listEl.append(liEl);

         liEl.addEventListener('click', () => {
            liEl.classList.toggle('done');
            saveData();
         });
         let div = document.createElement('div');
         liEl.append(div);

         let editBtn = document.createElement('button');
         editBtn.classList.add('edit-btn');
         div.append(editBtn);

         let delBtn = document.createElement('button');
         delBtn.classList.add('del-btn');
         div.append(delBtn);

         delBtn.addEventListener('click', () => {
            liEl.remove();
            saveData();
         });
      }
   }
}