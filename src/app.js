import Project from './project';

export const projects = [
	new Project('Code Review', 'Microverse code review process'),
];

export function createProject(name, summary) {
	projects.push(new Project(name, summary));
	console.log(projects);
}
