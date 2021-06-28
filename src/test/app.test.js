/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals';
import {
  projects,
  createProject,
  createTodo,
  setCurrentProject,
  getCurrentProject,
  updateProject,
  deleteProject,
  setCurrentTodo,
  getCurrentTodo,
  updateTodo,
  deleteTodo,
} from '../app';

const project = {
  name: 'First project',
  summary: 'This is the first test project',
};

const todo = {
  title: 'Review',
  dueDate: '2021-06-18',
  description: 'add button not visible',
  notes: 'Design should be simple',
  priority: 'high',
};

test('Increase the length of porjects', () => {
  const projectLen = projects.length;
  createProject(project.name, project.summary);
  expect(projects.length).toBe(projectLen + 1);
});

test('Add todo to a project', () => {
  setCurrentProject(projects[0]);
  const todoLen = projects[0].todos.length;
  createTodo(
    todo.name,
    todo.dueDate,
    todo.description,
    todo.notes,
    todo.priority,
  );
  expect(projects[0].todos.length).toBe(todoLen + 1);
});

test('Set current project', () => {
  setCurrentProject(projects[0]);
  expect(getCurrentProject()).toBe(projects[0]);
});

test('Change project name and Summary', () => {
  setCurrentProject(projects[0]);
  updateProject({ name: 'New Name', summary: 'New Summary' });
  expect(projects[0].name).toBe('New Name');
});

test('Remove a project from projects', () => {
  const projectLen = projects.length;
  deleteProject(0);
  expect(projects.length).toBe(projectLen - 1);
});

test('Set current Todo', () => {
  setCurrentProject(projects[0]);
  const currentProject = getCurrentProject();
  setCurrentTodo(currentProject.todos[0]);
  expect(getCurrentTodo()).toBe(currentProject.todos[0]);
});

test('Change todo title and duedate', () => {
  setCurrentProject(projects[0]);
  const currentProject = getCurrentProject();
  createTodo(
    todo.name,
    todo.dueDate,
    todo.description,
    todo.notes,
    todo.priority,
  );
  setCurrentTodo(currentProject.todos[0]);
  updateTodo({ title: 'New Todo', dueDate: '2021-06-29' });
  expect(currentProject.todos[0].title).toBe('New Todo');
  expect(currentProject.todos[0].dueDate).toBe('2021-06-29');
});

test('Remove a todo from a project', () => {
  setCurrentProject(projects[0]);
  const currentProject = getCurrentProject();
  setCurrentTodo(currentProject.todos[0]);
  const todoLen = currentProject.todos.length;
  deleteTodo(0);
  expect(currentProject.todos.length).toBe(todoLen - 1);
});
