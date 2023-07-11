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

      let liEl = document.createElement('li'),
         text = document.createElement('span'),
         div = document.createElement('div'),
         editBtn = document.createElement('button'),
         delBtn = document.createElement('button');

      liEl.classList.add('item');
      text.textContent = field.value;
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
         saveData();
      });

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
         let liEl = document.createElement('li'),
            text = document.createElement('span'),
            div = document.createElement('div'),
            editBtn = document.createElement('button'),
            delBtn = document.createElement('button');

         liEl.classList.add('item');
         text.textContent = arrItems[i];
         editBtn.classList.add('edit-btn');
         delBtn.classList.add('del-btn');

         div.append(editBtn);
         div.append(delBtn);
         liEl.prepend(text);
         liEl.append(div);
         listEl.append(liEl);

         text.addEventListener('click', () => {
            text.classList.toggle('done');
         });

         editBtn.addEventListener('click', () => {
         });

         delBtn.addEventListener('click', () => {
            liEl.remove();
         });
      }
   }
}