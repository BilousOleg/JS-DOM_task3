'use strict';

try {
  const tasks = [];

  const form = document.querySelector('.todo-form');
  const listElement = document.querySelector('.todo-list');

  // Прослуховувач подій + обробник відправки форми
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('.form-input');
    const value = input.value.trim();

    if (value.length !== 0) {
      input.classList.remove('invalid');
      const element = new TodoListItem(value);
      tasks.push(element);

      const todoCardEl = createTodoCard(element, tasks);
      render(todoCardEl, listElement);
      input.classList.add('invalid');
    } else {
      input.classList.add('invalid');
    }

    input.value = ''; // Очищення поля вводу після відправки форми
  });
} catch (error) {
  console.log(error);
}

// Функція, яка відповідає за відображення елементів на сторінці
function render(todoCardEl, listElement) {
  const li = document.createElement('li');
  li.append(todoCardEl);
  listElement.prepend(li); // Елемент додається в початок, щоб список виглядав як нормальний список (елементи згори донизу)
}

// Функція відповідає за створення елементу картки
function createTodoCard(todoListItem, cardArray) {
  if (!(todoListItem instanceof TodoListItem)) {
    throw new TypeError(`todoListItem must have type ${TodoListItem.name}`);
  }

  const todoCardEl = document.createElement('article');
  todoCardEl.classList.add('todo-card');
  todoCardEl.dataset.id = todoListItem.id; // Додавання властивості id елемента масиву до множини data-атрибутів картки

  const cardTextEl = document.createElement('p');
  cardTextEl.textContent = todoListItem.text;

  const deleteBtnEl = document.createElement('button');
  deleteBtnEl.classList.add('delete-btn');

  const trashcanEl = document.createElement('i');
  trashcanEl.classList.add('fa-regular', 'fa-trash-can');
  deleteBtnEl.append(trashcanEl);

  deleteBtnEl.addEventListener('click', (e) => {
    const currentCard = e.currentTarget.parentElement;
    const id = Number(currentCard.dataset.id); // Діставання id картки з її множини data-атрибутів

    if (Number.isNaN(id)) {
      throw new TypeError('id must be a number value');
    }

    const deleteIndex = cardArray.findIndex((task) => task.id === id);
    if (!deleteIndex !== -1) {
      currentCard.remove();
      cardArray.splice(deleteIndex, 1);
    } else {
      throw new Error('element not found');
    }
  });

  todoCardEl.append(cardTextEl, deleteBtnEl);

  return todoCardEl;
}
