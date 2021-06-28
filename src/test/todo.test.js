import { expect, test } from '@jest/globals';
import Todo from '../todo';

const todoArr = {
  title: 'Review',
  dueDate: '2021-06-18',
  description: 'add button not visible',
  notes: 'Design should be simple',
  priority: 'high',
};

const todo = new Todo(
  todoArr.title,
  todoArr.dueDate,
  todoArr.description,
  todoArr.notes,
  todoArr.priority,
);

test('return the a todo', () => {
  expect(todo).not.toBe(null);
});

test('return the a todo title', () => {
  expect(todo.title).toBe('Review');
});

test('return the a todo DueDate', () => {
  expect(todo.dueDate).toBe('2021-06-18');
});

test('return the todo description', () => {
  expect(todo.description).toBe('add button not visible');
});

test('return the todo notes', () => {
  expect(todo.notes).toBe('Design should be simple');
});

test('return todo priority', () => {
  expect(todo.priority).toBe('high');
});
