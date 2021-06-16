import Project from './project';

export const projects = [];

export function createProject(name, summary) {
	projects.push(new Project(name, summary));
	console.log(projects);
}
