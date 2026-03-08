'use strict';

const tasks = [];

const form = document.querySelector('.todo-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.dir(e.target.children[0].value);

  const listItemEl = document.createElement('li');
  const todoCardEl = createTodoCard(e.target.children[0].value, tasks);

  render(listItemEl, todoCardEl);

  console.table(tasks);
});

function render(listItemEl, todoCardEl) {
  listItemEl.append(todoCardEl);
  document.querySelector('.todo-list').append(listItemEl);
}

function createTodoCard(cardText, cardArray) {
  const todoCardEl = document.createElement('article');
  todoCardEl.classList.add('todo-card');

  todoCardEl.append(createCardText(cardText), createDeleteBtn(cardArray));

  cardArray.push(todoCardEl);

  return todoCardEl;
}

function createCardText(cardText) {
  const cardTextEl = document.createElement('p');
  cardTextEl.textContent = `${cardText}`;

  return cardTextEl;
}

function createDeleteBtn(cardArray) {
  const deleteBtnEl = document.createElement('button');
  deleteBtnEl.classList.add('delete-btn');

  const trashcanEl = document.createElement('i');
  trashcanEl.classList.add('fa-regular', 'fa-trash-can');
  deleteBtnEl.append(trashcanEl);

  deleteBtnEl.addEventListener('click', (e) => {
    const currentCard = e.currentTarget.parentElement;
    const deleteIndex = cardArray.findIndex((obj) => obj === currentCard);

    currentCard.remove();

    cardArray.splice(deleteIndex, 1);
  });

  return deleteBtnEl;
}
