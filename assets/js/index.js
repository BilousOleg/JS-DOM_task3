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
    } else {
      input.classList.add('invalid');
    }

    input.value = ''; // Очищення поля вводу після відправки форми
  });
} catch (error) {
  console.log(error);
}
