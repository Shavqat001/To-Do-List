let form = document.querySelector('form'),
   list = document.querySelector('ul'),
   field = document.querySelector('.text-field'),
   addBtn = document.querySelector('.add-btn'),
   delBtns = document.querySelectorAll('.del-btn'),
   items = document.querySelectorAll('.item');

window.addEventListener('load', () => {
   field.focus();
});

function addLiEl() {
   if (field.value) {
      field.style.outlineColor = '#111';

      let item = document.createElement('li');
      item.textContent = field.value;
      item.addEventListener('click', () => {
         item.classList.toggle('done');
      });

      let delBtn = document.createElement('button');
      delBtn.classList.add('del-btn');
      delBtn.addEventListener('click', () => {
         item.remove();
      });
      
      item.append(delBtn);
      list.append(item);
   } else {
      field.style.outlineColor = 'red';
   }
   field.value = '';
   field.focus();
}

form.addEventListener('submit', function (e) {
   e.preventDefault();
   addLiEl();
});

addBtn.addEventListener('click', function (e) {
   e.preventDefault();
   addLiEl();
});

for (let i = 0; i < items.length; i++) {
   items[i].addEventListener('click', () => {
      items[i].classList.toggle('done');
   });
}

for (let i = 0; i < delBtns.length; i++) {
   delBtns[i].addEventListener('click', () => {
      items[i].remove();
   });
}

