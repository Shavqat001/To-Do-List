let form = document.querySelector('form'),
   list = document.querySelector('ul'),
   field = document.querySelector('.text-field'),
   addBtn = document.querySelector('.add-btn');

window.addEventListener('load', () => {
   field.focus();
});

form.addEventListener('submit', function add(evt) {
   evt.preventDefault();
   if (field.value) {
      field.style.outlineColor = '#111';
      let item = document.createElement('li');
      item.textContent = field.value;

      let delBtn = document.createElement('button');
      delBtn.classList.add('del-btn');
      item.append(delBtn);
      list.append(item);

      let delBtns = document.querySelectorAll('.del-btn');

      delBtn.addEventListener('click', () => {
         item.remove();
      });
      for (let i = 0; i < delBtns.length; i++) {
         delBtns[i].addEventListener('click', () => {
            item.remove();
         });
      }
   } else {
      field.style.outlineColor = 'red';
   }
   field.value = '';
   field.focus();
});

addBtn.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (field.value) {
      field.style.outlineColor = '#111';
      let item = document.createElement('li');
      item.textContent = field.value;
      item.classList.add('item');

      let delBtn = document.createElement('button');
      delBtn.classList.add('del-btn');
      item.append(delBtn);
      list.append(item);

      delBtn.addEventListener('click', () => {
         item.remove();
      });

   } else {
      field.style.outlineColor = 'red';
   }
   field.value = '';
   field.focus();
});

let delBtns = document.querySelectorAll('.del-btn');
let items = document.querySelectorAll('.item');
for (let i = 0; i < delBtns.length; i++) {
   delBtns[i].addEventListener('click', () => {
      items[i].remove();
   });
   items[i].addEventListener('click', () => {
      items[i].classList.toggle('done');
   });
}
