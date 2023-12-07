const tasksListElement = document.querySelector(`.todo-list`);
const taskElements = tasksListElement.querySelectorAll(`.todo-list__item`);

for (const task of taskElements) {
    task.draggable = true;
}