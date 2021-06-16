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
	renderProjects();
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
	projectSection.innerHTML = ``;
	projects.forEach((project) => {
		const projectCard = document.createElement('div');
		projectCard.classList.add('card');
		projectCard.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">${project.name}</h5>
        <p class="card-text">${project.summary}</p>
        <a href="#"><span class="material-icons">
            add_circle
          </span>
        </a>
        <a href=""><span class="material-icons">
            edit
          </span></a>
        <a href="#"><span class="material-icons card-link">
            delete
          </span></a>
      </div>
    `;
		projectSection.appendChild(projectCard);
	});
}

export default { renderProjects };
