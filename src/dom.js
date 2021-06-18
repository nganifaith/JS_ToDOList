import {
  createProject,
  createTodo,
  getCurrentProject,
  deleteProject,
  projects,
  setCurrentProject,
  updateProject,
  setCurrentTodo,
  getCurrentTodo,
  updateTodo,
  deleteTodo,
} from './app';

// Add animation to form labels
document.querySelectorAll('.add-project label').forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}
      </span>`,
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

// Handle adding project on the main page
document.querySelector('.close-button').addEventListener('click', () => {
  projectForm.reset();
  setCurrentProject(null);
  projectForm.classList.add('hidden');
  projectSection.classList.remove('hidden');
  projectAddButton.classList.remove('hidden');
});

function renderTodos() {
  todoSection.innerHTML = '';
  getCurrentProject().todos.forEach((todo, idx) => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('card', 'mb-2');
    todoCard.innerHTML = `
  <div class="card-header">${todo.title}</div>
    <div class="card-body">
      <h5 class="card-title">${todo.dueDate}</h5>
      <p class="card-text">${todo.description}</p>
      <p class="card-text hidden">${todo.notes}</p>
      <a href="#" class="read-more"><span class="material-icons">
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
    <div class="card-footer ${todo.priority}">
      <small class="priority">${todo.priority}</small>
    </div>
`;
    todoSection.appendChild(todoCard);

    todoCard.querySelector('.read-more').addEventListener('click', () => {
      todoCard.querySelector('p:nth-child(3)').classList.toggle('hidden');
    });

    todoCard.querySelector('.edit-todo').addEventListener('click', () => {
      addTodoForm.classList.remove('hidden');
      addTodoButton.classList.add('hidden');
      todoSection.classList.add('hidden');
      setCurrentTodo(todo);
      addTodoForm.title.value = todo.title;
      addTodoForm.dueDate.value = todo.dueDate;
      addTodoForm.description.value = todo.description;
      addTodoForm.notes.value = todo.notes;
      addTodoForm.priority.value = todo.priority;
    });

    todoCard.querySelector('.delete-todo').addEventListener('click', () => {
      deleteTodo(idx);
      renderTodos();
    });
  });
}

function renderProject(project) {
  todoPage.classList.remove('hidden');
  todoPage.querySelector('h2').innerHTML = project.name;
  setCurrentProject(project);
  renderTodos();
}

function renderProjects() {
  projectSection.classList.remove('hidden');
  projectSection.innerHTML = '';
  projects.forEach((project, idx) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card', 'm-2');
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
      setCurrentProject(project);
      projectForm['project-name'].value = project.name;
      projectForm.summary.value = project.summary;
    });

    projectCard
      .querySelector('.delete-project')
      .addEventListener('click', () => {
        deleteProject(idx);
        renderProjects();
      });
  });
}

projectAddButton.addEventListener('click', () => {
  projectForm.classList.remove('hidden');
  projectAddButton.classList.add('hidden');
});

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = projectForm['project-name'].value;
  const summary = projectForm.summary.value;

  if (getCurrentProject()) {
    updateProject({ name, summary });
    setCurrentProject(null);
  } else {
    createProject(name, summary);
  }

  projectForm.reset();
  projectForm.classList.add('hidden');
  projectAddButton.classList.remove('hidden');
  renderProjects();
});

addTodoForm.querySelector('.close-button').addEventListener('click', () => {
  addTodoForm.reset();
  setCurrentTodo(null);
  addTodoForm.classList.add('hidden');
  todoSection.classList.remove('hidden');
  addTodoButton.classList.remove('hidden');
});

todoPage.querySelector('i').addEventListener('click', () => {
  todoPage.classList.add('hidden');
  mainSection.classList.remove('hidden');
});

addTodoButton.addEventListener('click', () => {
  addTodoForm.classList.remove('hidden');
  addTodoButton.classList.add('hidden');
});

addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = addTodoForm.title.value;
  const dueDate = addTodoForm.dueDate.value;
  const description = addTodoForm.description.value;
  const notes = addTodoForm.notes.value;
  const priority = addTodoForm.priority.value;

  if (getCurrentTodo()) {
    updateTodo({
      title,
      dueDate,
      description,
      notes,
      priority,
    });
    setCurrentTodo(null);
  } else {
    createTodo(title, dueDate, description, notes, priority);
  }

  addTodoForm.reset();
  addTodoForm.classList.add('hidden');
  addTodoButton.classList.remove('hidden');
  todoSection.classList.remove('hidden');
  renderTodos();
});

export default { renderProjects };
