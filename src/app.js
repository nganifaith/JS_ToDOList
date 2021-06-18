import Project from './project';
import Todo from './todo';
import { save, loadProjects } from './localstorage';

export const projects = loadProjects() || [
  new Project('Code Review', 'Microverse code review process'),
];

let currentProject = null;
let currentTodo = null;

export function createProject(name, summary) {
  projects.push(new Project(name, summary));
  save(projects);
}

export function createTodo(title, dueDate, description, notes, priority) {
  currentProject.todos.push(
    new Todo(title, dueDate, description, notes, priority),
  );
  save(projects);
}

export function setCurrentProject(project) {
  currentProject = project;
}

export function getCurrentProject() {
  return currentProject;
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

export function setCurrentTodo(todo) {
  currentTodo = todo;
}

export function getCurrentTodo() {
  return currentTodo;
}

export function updateTodo({
  title, dueDate, description, notes, priority,
}) {
  currentTodo.title = title;
  currentTodo.dueDate = dueDate;
  currentTodo.description = description;
  currentTodo.notes = notes;
  currentTodo.priority = priority;
  save(projects);
}

export function deleteTodo(idx) {
  currentProject.todos.splice(idx, 1);
  save(projects);
}
