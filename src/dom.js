import {
  createProject,
  createTodo,
  currentProject,
  projects,
  setCurrentProject,
} from './app';

// Add animation to form labels

document.querySelectorAll('.add-project label').forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('');
});

// Get all html elements
const projectForm = document.querySelector('form');
const projectAddButton = document.querySelector('.add button');
const projectSection = document.querySelector('.project');
const mainSection = document.querySelector('.main-section');

const todoSection = document.querySelector('.all-todos');
const addTodoForm = document.querySelector('.add-todos form');
const addTodoButton = document.querySelector('.add-todos button');
const todoPage = document.querySelector('.add-todos');

//Handle adding project on the main page

projectAddButton.addEventListener('click', () => {
  projectForm.classList.remove('hidden');
  projectAddButton.classList.add('hidden');
});

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createProject(projectForm['project-name'].value, projectForm.summary.value);
  projectForm.reset();
  projectForm.classList.add('hidden');
  projectAddButton.classList.remove('hidden');
  renderProjects();
});

function renderProjects() {
  projectSection.innerHTML = ``;
  projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">${project.name}</h5>
    <p class="card-text">${project.summary}</p>
    <a href="#" class="add-todo"><span class="material-icons">
    add_circle
    </span>
    </a>
    <a href="#" class="edit-project"><span class="material-icons">
    edit
    </span></a>
    <a href="#" class="delete-project"><span class="material-icons card-link">
    delete
    </span></a>
  </div>
`;
    projectSection.appendChild(projectCard);

    projectCard.querySelector('.add-todo').addEventListener('click', () => {
      mainSection.classList.add('hidden');
      renderProject(project);
    });

    projectCard.querySelector('.edit-project').addEventListener('click', () => {
      projectForm.classList.remove('hidden');
      projectAddButton.classList.add('hidden');
      projectSection.classList.add('hidden');
    });
  });
}

// Handles Adding todo to a project

function renderTodos() {
  todoSection.innerHTML = ``;
  currentProject.todos.forEach((todo) => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('card');
    todoCard.innerHTML = `
  <div class="card-header">${todo.title}</div>
    <div class="card-body">
      <h5 class="card-title">${todo.dueDate}</h5>
      <p class="card-text">${todo.description}</p>
      <a href="" class="read-more"><span class="material-icons">
      read_more
      </span></a>
      <a href="#" class="edit-todo"><span class="material-icons">
          edit
          </span>
      </a>
      <a href="#" class="delete-todo"><span class="material-icons card-link">
      delete
      </span></a>
    </div>
    <div class="card-footer">
      <small class="text-muted">${todo.priority}</small>
    </div>
`;
    todoSection.appendChild(todoCard);
  });
}

addTodoButton.addEventListener('click', () => {
  addTodoForm.classList.remove('hidden');
  addTodoButton.classList.add('hidden');
});

addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createTodo(
    addTodoForm.title.value,
    addTodoForm.dueDate.value,
    addTodoForm.description.value,
    addTodoForm.notes.value,
    addTodoForm.priority.value
  );
  addTodoForm.reset();
  addTodoForm.classList.add('hidden');
  addTodoButton.classList.remove('hidden');
  renderTodos();
});

// Render a project with its todos

function renderProject(project) {
  todoPage.classList.remove('hidden');
  todoPage.querySelector('h2').innerHTML = project.name;
  setCurrentProject(project);
  renderTodos();
}

export default { renderProjects };
