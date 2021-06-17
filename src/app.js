import Project from './project';
import Todo from './todo';
import { save, loadProjects } from './localstorage';

export const projects = loadProjects() || [
  new Project('Code Review', 'Microverse code review process'),
];

export let currentProject = projects[0];

export function createProject(name, summary) {
  projects.push(new Project(name, summary));
  save(projects);
}

export function createTodo(title, dueDate, description, notes, priority) {
  currentProject.todos.push(
    new Todo(title, dueDate, description, notes, priority)
  );
  save(projects);
}

export function setCurrentProject(project) {
  currentProject = project;
}

export function updateProject({ name, summary }) {
  currentProject.name = name;
  currentProject.summary = summary;
  save(projects);
}

export function deleteProject(idx) {
  projects.splice(idx, 1);
  save(projects);
}
