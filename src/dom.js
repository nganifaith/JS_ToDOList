import { createProject, projects } from './app';

const projectForm = document.querySelector('form');
const projectAddButton = document.querySelector('.add button');
const labels = document.querySelectorAll('.add-project label');
const projectSection = document.querySelector('.project');

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
});

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map(
			(letter, idx) =>
				`<span style="transition-delay:${idx * 50}ms">${letter}</span>`
		)
		.join('');
});

function renderProjects() {
	projects.forEach((project) => {});
}

export default {};
