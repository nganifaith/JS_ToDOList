import Project from './project';
import Todo from './todo';

export const projects = [
	new Project('Code Review', 'Microverse code review process'),
];

export let currentProject = projects[0];

export function createProject(name, summary) {
	projects.push(new Project(name, summary));
}

export function createTodo(title, dueDate, description, notes, priority) {
	currentProject.todos.push(
		new Todo(title, dueDate, description, notes, priority)
	);
	console.log(currentProject.todos);
}
