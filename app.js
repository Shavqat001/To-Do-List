let formEL = document.querySelector('form'),
   field = document.querySelector('.field'),
   listEl = document.querySelector('.list'),
   addBtn = document.querySelector('.add-btn');

formEL.addEventListener('submit', (evt) => {
   evt.preventDefault();
});

addBtn.addEventListener('click', () => {
   addLiToUl();
});

window.addEventListener('load', () => {
   field.placeholder = 'write something . . .';
   loadData();
   field.focus();
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
            });
         }
      });

      delBtn.addEventListener('click', () => {
         liEl.remove();
         saveData();
      });
   } else {
      field.style.outlineColor = 'tomato';
      alert('You must write something');
   }
   field.focus();
   field.value = '';
   saveData();
}

function saveData() {
   let arrItems = [];
   let arrDone = [];

   let items = document.querySelectorAll('.item');
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

function loadData() {
   let arrItems = JSON.parse(localStorage.getItem('items'));
   let arrClasses = JSON.parse(localStorage.getItem('classes'));

   if (arrItems && arrClasses) {
      for (let i = 0; i < arrItems.length; i++) {
         let liEl = document.createElement('li'),
            text = document.createElement('span'),
            div = document.createElement('div'),
            editBtn = document.createElement('button'),
            delBtn = document.createElement('button');

         liEl.classList.add('item');
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
               });
            }
         });

         delBtn.addEventListener('click', () => {
            liEl.remove();
            saveData();
         });
      }
   }
}
