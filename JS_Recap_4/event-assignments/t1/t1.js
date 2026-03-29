// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const list = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const form = dialog.querySelector('form');
const input = form.querySelector('input');
const addBtn = document.querySelector('.add-btn');

function renderList() {
  list.innerHTML = '';

  todoList.forEach(item => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;

    const label = document.createElement('label');
    label.textContent = item.task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';

    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      console.log(todoList);
    });

    deleteBtn.addEventListener('click', () => {
      const index = todoList.indexOf(item);
      todoList.splice(index, 1);
      renderList();
      console.log(todoList);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const task = input.value.trim();
  if (!task) return;

  todoList.push({
    id: Date.now(),
    task,
    completed: false,
  });

  input.value = '';
  dialog.close();
  renderList();
  console.log(todoList);
});

renderList();
